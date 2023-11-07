import fastify from 'fastify';
import 'dotenv/config'

const app = fastify()
const HOST = '0.0.0.0';

var PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen({ port: PORT ? Number(PORT, HOST) : 5001 }, (err) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at port ${PORT}`);
})
