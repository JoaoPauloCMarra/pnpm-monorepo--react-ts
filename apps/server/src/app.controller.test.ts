import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import MOCK from './MOCK';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('API', () => {
    it('root should return a text', () => {
      expect(appController.getIndexInfo()).toStrictEqual('Api Working');
    });

    it('GET /me should return UserInfo JSON', () => {
      expect(appController.getUserData()).toStrictEqual(MOCK.user);
    });

    it('POST /user-language should return prev and next language', () => {
      const nextLanguage = 'en';
      expect(appController.saveUserLanguage({ language: nextLanguage })).toStrictEqual({
        prevLanguage: 'es',
        nextLanguage,
      });
    });
  });
});
