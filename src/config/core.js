import createDatabase from './database.js'
import createWebserver from './webserver.js'
import createRoutes from './routes.js'

const createCore = (config = {}) => {
    const database = config.database || createDatabase()
    const webserver = config.webserver || createWebserver()
    

    const start = async () => {
        console.log('> [core] Startting...')
        database.start()
        const server = await webserver.start()
        const routes = createRoutes(server)
        routes.create()
        
    }

    const stop = () => {
        console.log('> [core] Stoping...')
        database.stop()
        console.log('> [core] Stoped...')
    }

    return {
        start,
        stop
    }
}

export default createCore
