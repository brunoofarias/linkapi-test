import express from 'express'

const createRoutes = (server) => {
    const router = express.Router()

    const create = () => {
        console.log('> [routes] Starting...')
        server.use('/api', router)

        console.log('> [routes] Starting done! All routes configured.')
    }

    return {
        create
    }
}

export default createRoutes
