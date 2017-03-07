import { argv } from 'yargs'

// 环境：test/beta/prod, 默认test

export const envName = ['test', 'beta', 'prod'].find(e => argv[e]) || 'test'

export const envConfig = {
    test: {
        publicPath: `http://${ip.address()}/vue-chat-room/`
    },
    beta: {
        publicPath: `http://${ip.address()}/vue-chat-room/`        
    },
    prod: {
        publicPath: `http://${ip.address()}/vue-chat-room/`        
    }
}