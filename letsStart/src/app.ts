import * as express from "express";

const app: express.Express = express()
const port: number = 8000

app.get('/test', (req: express.Request, res: express.Response) => {
    // console.log(req);
    // res.send('Hello World!')
    res.send({message: 'Hello World!', name: 'leecoder', age: 27})
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
