import process from 'dotenv'
import fetch from 'node-fetch'

const Bling = () => {
    const config = process.config().parsed

    const insertOrders = (order) => {
        return new Promise((resolve, reject) => {
            var params = new URLSearchParams()
            params.append("xml", order)
            params.append("apikey", config.BLING_API_KEY)

            fetch(`https://bling.com.br/Api/v2/pedido/json/`, {
                method: 'POST',
                headers: {
                    apikey: config.BLING_API_KEY,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: params
            }).then(result => {
                const { ok, status, statusText } = result

                if (ok) {
                    resolve({
                        status: status,
                        message: statusText
                    })
                } else {
                    reject({
                        status: status,
                        message: "Error inserting order: " + statusText
                    })
                }
            })
        })
    }

    return {
        insertOrders
    }
}

export default Bling
