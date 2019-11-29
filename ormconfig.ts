import { ConnectionOptions, DatabaseType } from 'typeorm';

require('dotenv').config();

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: ['src/**/models/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/**/models',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscriber',
  },
};

export = config;
