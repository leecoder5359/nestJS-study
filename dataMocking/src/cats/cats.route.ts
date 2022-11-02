import * as express from "express";
import {
    createCat,
    deleteCat,
    readAllcat,
    readCat,
    updateAllcat,
    updateCat
} from "./cats.service";

const router = express.Router();
//* READ 고양이 전체 데이터 조회
router.get('/cats', readAllcat)

//* READ 고양이 특정 데이터 조회
router.get('/cats/:id', readCat)

//* CREATE 고양이 데이터 생성
router.post('/cats', createCat)

//* UPDATE 고양이 데이터 업데이트 -> PUT
router.put('/cats/:id', updateAllcat)

//* UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
router.patch('/cats/:id', updateCat)

//* DELETE 고양이 데이터 삭제 -> DELETE
router.delete('/cats/:id', deleteCat)

export default router;
