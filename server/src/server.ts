import Fastify from "fastify"
import cors from '@fastify/cors'
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

    await fastify.register(poolRotes)
    await fastify.register(authRoutes)
    await fastify.register(gameRotes)
    await fastify.register(guessRotes)
    await fastify.register(userRotes)
    
    await fastify.listen({ port: 3333, /* '0.0.0.0' */ })
}

bootstrap()