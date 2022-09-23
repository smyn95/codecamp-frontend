console.log('g222');

import { DataSource } from 'typeorm';
import { Board } from './BoardTable';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: '34.64.199.68',
  port: 5001,
  username: 'postgres',
  password: 'postgres2022',
  database: 'postgres',
  synchronize: true,
  logging: true,
  entities: [Board],
});

AppDataSource.initialize()
  .then(() => {
    console.log('DB접속 성공!');
  })
  .catch(() => {
    console.log('DB접속 실패!');
    console.log('원인 : ');
    console.log('error');
  });
