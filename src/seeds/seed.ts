// src/seed.ts

import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { SeedService } from './seeder.service';
import { logger } from 'express-winston';

const seed = async () => {
  try {
    await createConnection();
    const seedService = new SeedService();

    await seedService.seedUsers();

    console.log('Seeding completed.');
    process.exit(0);
  } catch (error) {
    console.log(`Seeding failed with error: ${error}`);
    process.exit(1);
  }
};

seed();
