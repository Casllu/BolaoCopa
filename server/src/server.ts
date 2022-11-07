import Fastify from "fastify"
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { poolRotes } from "./routes/pool"
import { guessRotes } from "./routes/guess"
import { gameRotes } from "./routes/game"
import { authRoutes } from "./routes/auth"
import { userRotes } from "./routes/user"


async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true, 
    })


    // Em produção isso precisa ser uma variável ambiente
    await fastify.register(jwt, {
        secret: 'nlw',
    })

    await fastify.register(poolRotes)
    await fastify.register(authRoutes)
    await fastify.register(gameRotes)
    await fastify.register(guessRotes)
    await fastify.register(userRotes)
    
    await fastify.listen({ port: 3333, host: '0.0.0.0'  })
}

bootstrap()