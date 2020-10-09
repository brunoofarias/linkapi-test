import express from 'express'
import Pipedrive from './../models/pipedrive.js'
import Bling from './../models/bling.js'
import orders from './../models/orders.js'
import { OBJtoXML } from './../utils/utils.js'

const pipedrive = Pipedrive()
const bling = Bling()

const GeneralController = (server) => {
    const router = express.Router()

    router.get('/integrate', async (request, response) => {
        await pipedrive.getWonDeals()
        .then(
            result => {
                result.data.forEach(deal => {
                    let xml = OBJtoXML({
                        pedido: {
                            client: {
                                nome: deal.person_id.name
                            },
                            itens: [
                                {
                                    item: {
                                        codigo: 1515,
                                        descricao: deal.title,
                                        qtde: 1,
                                        vlr_unit: deal.value
                                    }
                                }
                            ],
                            parcelas: [
                                {
                                    parcela: {
                                        vlr: deal.value
                                    }
                                }
                            ]
                        }
                    })

                    bling.insertOrders(xml).then(
                        res => {
                            if (res.status === 201) {
                                deal.bling_xml = xml
                                orders.create(deal, (error, result) => {
                                    if (error) {
                                        response.status(500).json(error)
                                        return
                                    }
                                })
                            }
                        },
                        error => {
                            response.status(500).json(error)
                            return
                        }
                    )
                })

                response.status(200).json({ message: "Oportunidades integradas e salvas!" })
            },
            error => {
                response(error.status).json(error.message)
            }
        )
    })

    server.use('/general', router)
}

export default GeneralController
