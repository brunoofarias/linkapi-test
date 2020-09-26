import mongoose from 'mongoose'
import process from 'dotenv'

const createDatabase = () => {
    let connection = null

    const start = () => {
        const config = process.config().parsed
        console.log('> [database]: Starting...')

        connection = mongoose.connect(`mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}/${config.DB_DATABASE}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (error) => {
            if (error) {
                throw new Error(`> [database] Error starting MongoDB: ${error}`)
            } else {
                console.log(`> [database] Database Started`)
            }
        })

        return connection
    }

    const stop = () => {
        try {
            mongoose.disconnect()   
        } catch (error) {
            throw new Error(`> [database] Stoping error: ${error}`)
        }
    }

    return {
        start,
        stop
    }
}

export default createDatabase
