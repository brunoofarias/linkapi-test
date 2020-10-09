import orders from './../models/orders.js'
import express from 'express'

const OrdersController = (server) => {
    const router = express.Router()

    router.get('/', async (request, response) => {
        orders.find({}, (error, result) => {
            if (error) {
                response.status(500).json(error)
            }

            response.status(200).json(result)
        })
    })

    server.use('/orders', router)
}

export default OrdersController
