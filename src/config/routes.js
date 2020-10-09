import GeneralController from './../controllers/general.js'
import OrdersController from './../controllers/orders.js'

const createRoutes = (server) => {
    const create = () => {
        console.log('> [routes] Starting...')
        
        GeneralController(server)
        OrdersController(server)

        console.log('> [routes] Starting done! All routes configured.')
    }

    return {
        create
    }
}

export default createRoutes
