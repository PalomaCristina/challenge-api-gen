import fastify from 'fastify';
import 'dotenv/config'

const app = fastify()

var PORT = process.env.PORT

app.listen({ port: PORT ? Number(PORT) : 5001 }, (err) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at port ${PORT}`);
})
