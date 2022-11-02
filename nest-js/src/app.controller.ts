import {Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';
import {CatsService} from "./cats/cats.service";
import {HttpExceptionFilter} from "./common/exceptions/http-exception.filter";

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private readonly catService: CatsService
  ) {}

  @Get()
  getHello(): string {
    return this.catService.hiCatServiceProduct();
  }
}
