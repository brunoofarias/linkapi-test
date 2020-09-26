import createCore from '../config/core.js'

const createMock = () => {
    const start = () => {
        console.log('> [mock] ...')
    }

    const stop = () => {
        console.log('> [mock] ...')
    }

    return {
        start,
        stop
    }
}

describe('Core quando importado', () => {
    test('deve ter o método #starte #stop', () => {
        const core = createCore()
        expect(core).toHaveProperty('start')
        expect(core).toHaveProperty('stop')
    })
})

describe('Core quando inicializado', () => {
    test('não deve retornar erros', () => {
        const databaseMock = createMock()
        const core = createCore({
            database: databaseMock
        })
        expect(() => {
            core.start()
        }).not.toThrow()
    })
})
