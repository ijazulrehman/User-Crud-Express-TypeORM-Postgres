require('dotenv/config');

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST || '127.0.0.1',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'coding_test',
  port: parseInt(process.env.DB_PORT,10) || 5432,
  synchronize: false,
  entities: process.env.NODE_ENV !== 'production' ? ['**/**.entity.ts'] : ['dist/**/*.entity.js'],
  logging: process.env.NODE_ENV !== 'production' ? 'all' : 'error',
  migrations: ['src/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/migrations'
  },
  connectTimeout: 30000,
  acquireTimeout: 30000
};
