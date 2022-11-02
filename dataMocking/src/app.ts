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

//* READ 고양이 전체 데이터 조회
app.get('/cats', (req: express.Request, res: express.Response) => {
    try{
        const cats = Cat;
        // throw new Error('db connect error');
        res.status(200).send({
            success: true,
            data: {
                cats,
            }
        })
    }catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            error: error.toString(),
        })
    }
})

//* READ 고양이 특정 데이터 조회
app.get('/cats/:id', (req: express.Request, res: express.Response) => {
    try{
        const id = req.params.id;
        const cat = Cat.find((cat) => cat.id === id);
        res.status(200).send({
            success: true,
            data: {
                cat,
            }
        })
    }catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            error: error.toString(),
        })
    }
})

//*json middleware
app.use(express.json());

//* CREATE 고양이 데이터 생성
app.post('/cat', (req: express.Request, res: express.Response) => {
    try{
        const data = req.body;
        console.log(data);
        Cat.push(data); // create
        res.status(200).send({
            success: true,
            data: {
                data,
            }
        })
    }catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            error: error.toString(),
        })
    }
})

app.use(((req:express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('this is err middleware');
    res.send({ error: '404 not found error' })
}));

app.listen(port, () => {
    console.log(`Mocking app listening on port http://localhost:${port}`)
})
