import process from 'dotenv'
import fetch from 'node-fetch'

const Pipedrive = () => {
    const config = process.config().parsed

    const getWonDeals = () => {
        return new Promise((resolve, reject) => {
            fetch(`https://api.pipedrive.com/api/v1/deals?status=won&api_token=${config.PD_TOKEN}`)
            .then(result => {
                const { ok, status } = result

                if (ok) {
                    result
                    .json()
                    .then(deals => {
                        resolve(deals)
                    })
                } else {
                    const message = status === 404 ? "No deals found" : "Bad Request"

                    reject({
                        status: status,
                        message: message
                    })
                }
            })
        })
    }

    return {
        getWonDeals
    }
}

export default Pipedrive
