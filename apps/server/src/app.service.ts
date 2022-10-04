import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUserData(): UserInfo {
    return {
      username: 'John',
      email: 'john@email.com',
      language: 'pt',
    };
  }
}
