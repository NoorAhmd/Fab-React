const keys = require('./keys')
const redis = require('redis')

const redisClient = redis.RedisClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_startegy: () => 1000
})

const sub = redisClient.duplicate()


const fib = (index) => {
    if (index < 2) return 1
    return fib(index - 1) + fib(index - 2)
}


