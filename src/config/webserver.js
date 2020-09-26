import process from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const createWebserver = () => {
    const server = express()
    const port = process.config().parsed.APP_PORT

    const start = () => {
        return new Promise((resolve) => {
            console.log('> [webserver] Starting... ')
            server.use(cors())
            server.use(bodyParser.urlencoded({ extended: true }))
            server.use(bodyParser.json())

            server.listen(port, () => {
                console.log(`> [webserver]: Starting done! Webserver running in port ${port}`)
            })

            resolve(server)
        })
    }

    return {
        start
    }
}

export default createWebserver
