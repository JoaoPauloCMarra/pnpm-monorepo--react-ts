import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

import { Injectable } from '@nestjs/common';

import MOCK from './MOCK';

const readDbFile = () => {
  const jsonString = readFileSync(path.resolve('src/db.json'), { encoding: 'utf8', flag: 'r' });
  return JSON.parse(jsonString);
};
const saveDbFile = (content: string) => writeFileSync(path.resolve('src/db.json'), content);

@Injectable()
export class AppService {
  getUserData(): UserInfo {
    if (process.env.NODE_ENV === 'test') {
      return MOCK.user;
    }

    const data = readDbFile();
    return data.user;
  }

  saveUserLanguage(language: string): { prevLanguage: string; nextLanguage: string } {
    if (process.env.NODE_ENV === 'test') {
      return { prevLanguage: 'es', nextLanguage: language };
    }

    const data = readDbFile();
    const prevLanguage = data.user.language;

    data.user.language = language;
    saveDbFile(JSON.stringify(data, null, 2));

    return { prevLanguage, nextLanguage: language };
  }
}
