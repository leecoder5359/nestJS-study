import * as express from "express";
import catsRoute from "./cats/cats.route";
import { Cat, CatType } from "./cats/cats.model"

const app: express.Express = express()
const port: number = 8000

const data: CatType[] = Cat;

app.use(((req:express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.headers);
    console.log('this is logging middleware');
    next();
}))
app.use(express.json());

app.use(catsRoute);

app.use(((req:express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('this is err middleware');
    res.send({ error: '404 not found error' })
}));

app.listen(port, () => {
    console.log(`Mocking app listening on port http://localhost:${port}`)
})
