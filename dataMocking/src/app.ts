import * as express from "express";
import { Cat, CatType } from "./app.model"

const app: express.Express = express()
const port: number = 8000

const data: CatType[] = Cat;

app.use(((req:express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.headers);
    console.log('this is logging middleware');
    next();
}))

app.get('/', (req: express.Request, res: express.Response) => {
    console.log('test',req.headers);
    res.send({data})
})

app.get('/cats/som', (req: express.Request, res: express.Response) => {
    res.send({ blue: data[1] });
})

app.get('/cats/blue', (req: express.Request, res: express.Response) => {
    res.send({ blue: data[0] });
})

app.use(((req:express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('this is err middleware');
    res.send({ error: '404 not found error' })
}));

app.listen(port, () => {
    console.log(`Mocking app listening on port http://localhost:${port}`)
})
