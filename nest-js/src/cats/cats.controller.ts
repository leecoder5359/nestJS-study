import {
    Controller,
    Delete,
    Get,
    HttpException,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Put,
    UseFilters
} from '@nestjs/common';
import {CatsService} from "./cats.service";
import {HttpExceptionFilter} from "../http-exception.filter";

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    getAllCat() {
        throw new HttpException('api is broken', 401)
        return 'all cat';
    }

    @Get(':id')
    getCat(@Param('id', ParseIntPipe) param: number) {
        console.log(typeof param, param);
        return 'cat';
    }

    @Post()
    createCat() {
        return 'update cat';
    }

    @Patch()
    updatePatialCat() {
        return 'update Patial cat'
    }

    @Put()
    updateCat() {
        return 'update cat'
    }

    @Delete()
    deleteCat() {
        return 'delete cat'
    }
}
