import { Controller, Body, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  newUsuario(@Body() body:any):string{
    return this.appService.newUsuario(body);
  }
}
