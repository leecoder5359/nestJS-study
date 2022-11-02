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
    UseFilters, UseInterceptors
} from '@nestjs/common';
import {CatsService} from "./cats.service";
import {HttpExceptionFilter} from "../common/exceptions/http-exception.filter";
import {PositiveIntPipe} from "../common/pipes/positiveInt.pipe";
import {SuccessInterceptor} from "../common/interceptions/success.interceptor";

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    getAllCat() {
        return { cats: 'all cat' };
    }

    @Get(':id')
    getCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
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
