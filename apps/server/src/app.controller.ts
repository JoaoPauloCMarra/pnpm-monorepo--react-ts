import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIndexInfo(): string {
    return 'Api Working';
  }

  @Get('/me')
  getUserData(): UserInfo {
    return this.appService.getUserData();
  }

  @Get('/random')
  getRandom(): string {
    return Math.random().toString();
  }
}
