import { Request, Response} from 'express';
import {Cat} from "./cats.model";
//* READ 고양이 전체 데이터 조회
export const readAllcat = ((req: Request, res:Response) => {
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
export const readCat = ((req: Request, res: Response) => {
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

//* CREATE 고양이 데이터 생성
export const createCat = ((req: Request, res: Response) => {
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
    }catch (e) {
        res.status(400).send({
            success: false,
            error: e.toString(),
        })
    }
})

//* UPDATE 고양이 데이터 업데이트 -> PUT
export const updateAllcat = ((req: Request, res: Response) => {
    try{
        const params = req.params;
        const body = req.body;
        let result;

        Cat.forEach((cat) => {
            if (cat.id === params.id){
                cat = body;
                result = cat;
            }
        });

        res.status(200).send({
            success: true,
            data: {
                cat: result
            }
        })
    }catch (e) {
        res.status(400).send({
            success: false,
            error: e.toString(),
        })
    }
})

//* UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
export const updateCat = ((req: Request, res: Response) => {
    try{
        const params = req.params;
        const body = req.body;
        let result;

        Cat.forEach((cat) => {
            if (cat.id === params.id){
                cat = {...cat, ...body};
                result = cat;
            }
        });

        res.status(200).send({
            success: true,
            data: {
                cat: result
            }
        })
    }catch (e) {
        res.status(400).send({
            success: false,
            error: e.toString(),
        })
    }
})

//* DELETE 고양이 데이터 삭제 -> DELETE
export const deleteCat = ((req: Request, res: Response) => {
    try{
        const params = req.params;

        const newCate = Cat.filter((cat) => cat.id !== params.id);

        res.status(200).send({
            success: true,
            data: {
                cat: newCate
            }
        })
    }catch (e) {
        res.status(400).send({
            success: false,
            error: e.toString(),
        })
    }
})
