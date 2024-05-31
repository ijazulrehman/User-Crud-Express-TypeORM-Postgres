# NodeJS Sample
#### ExpressJS, Typescript, TypeORM, Postgres

## 1. Running project
### Stable environment

1. Node version: ```20.14.0```
3. NPM version: ```10.7.0```
4. Postgres version: ```^8.11.5```

#### 1.1. Setup
1. Install packages

```$ npm install```

2. Create .env file in the root folder and update some variables
```
DB_HOST={your_host}
DB_USER={your_user}
DB_PASSWORD={your_password}
DB_NAME={your_db}
PORT={your_running_port}
NODE_ENV=local
TOKEN_SECRET_KEY=test
```
#### 1.2. Docker

1. Run docker compose command which start your postgres server

```$ docker compose up -d```

#### 1.3. Running
```$ npm run dev```

### 1.4. Seed
1. Run the command to seed data in database

``` $ npm run seed ```