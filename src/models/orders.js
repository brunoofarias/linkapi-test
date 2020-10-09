import restful from 'node-restful'
const mongoose = restful.mongoose

const orders = new mongoose.Schema({}, { collection: 'orders', strict: false })

export default restful.model('orders', orders)
