import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIndexInfo() {
    return 'Api Working';
  }

  @Get('/me')
  getUserData() {
    return this.appService.getUserData();
  }

  @Post('/user-language')
  saveUserLanguage(@Body() body: { language: string }) {
    return this.appService.saveUserLanguage(body.language);
  }
}
