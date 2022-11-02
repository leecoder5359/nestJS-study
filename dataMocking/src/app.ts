import * as express from "express";
import catsRoute from "./cats/cats.route";
import { Cat, CatType } from "./cats/cats.model"

/**
 * 싱글톤 패턴
 * 객체의 인스턴스가 오직 한개만 만들어지는 패턴
 * 클래스로 한개의 인스턴스만 찍는 것
 * 이유 : 추후 객체에 접근할때 메모리 낭비 방지
 */
class Server {
    public app: express.Application;

    constructor() {
        const app: express.Application = express();
        this.app = app;
    }

    private setRoute() {
        this.app.use(catsRoute);
    }

    private setMiddleware() {
        this.app.use(((req:express.Request, res: express.Response, next: express.NextFunction) => {
            console.log(req.headers);
            console.log('this is logging middleware');
            next();
        }))
        this.app.use(express.json());

        this.setRoute();

        this.app.use(((req:express.Request, res: express.Response, next: express.NextFunction) => {
            console.log('this is err middleware');
            res.send({ error: '404 not found error' })
        }));
    }

    public listen() {
        this.setMiddleware();

        this.app.listen(8000, () => {
            console.log(`Mocking app listening on port http://localhost:8000`)
        })
    }
}

const startServer = () => {
    const server = new Server();
    server.listen();
}

startServer();
