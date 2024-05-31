# User Manager
#### ExpressJS, TypeScript, TypeORM, Postgres

## 1. Running the Project
### Stable Environment

1. Node version: ```20.14.0```
2. NPM version: ```10.7.0```
3. Postgres version: ```^8.11.5```

### 1.1. Setup
1. Install packages:
    ```bash
    npm install
    ```

2. Copy the example environment file and update the necessary variables:
    ```bash
    cp .env.example .env
    ```

### 1.2. Docker
1. Run the Docker Compose command to start your Postgres server:
    ```bash
    docker compose up -d
    ```

### 1.3. Running
1. Start the development server:
    ```bash
    npm run dev
    ```

### 1.4. Seed
1. Seed the database with initial data:
    ```bash
    npm run seed
    ```

## Backend Development
### Task: Create a Simple REST API using Express.js

### API Endpoints:
- **POST /users**: Creates a new user.
- **GET /users/:id**: Retrieves a user by ID.
- **PUT /users/:id**: Updates a user's information.
- **DELETE /users/:id**: Deletes a user.

### Database Integration:
Use Postgres to store user information.

### User Model:
- **ID**: Auto-incrementing
- **Name**
- **Email**
- **Password**: Hashed

## Front-end Integration
Create a simple HTML form to test the API endpoints. The form should allow you to:
- Create a user
- Retrieve a user by ID
- Update a user's information
- Delete a user

To test the API endpoints from the UI, open the `index.html` file in your repository after running the application.

