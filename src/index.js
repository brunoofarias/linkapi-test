import createCore from './config/core.js'

const core = createCore()

try {
    core.start()
} catch (error) {
    console.log('[index] Uncaught error!')
    console.log(error)    
}
