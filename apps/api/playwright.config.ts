import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'
import dotenv from 'dotenv'
dotenv.config()

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    baseURL: `http://localhost:${process.env.PORT}`,
    trace: 'on-first-retry',
  },
  outputDir: 'test-results/',
};

export default config;
