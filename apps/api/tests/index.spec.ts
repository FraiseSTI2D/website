import { test, expect } from '@playwright/test'

test.describe('Test the index routes', () => {
  test('Test stats request', async ({ request }) => {
    const stats = await request.get('/stats')
    expect(stats.ok()).toBeTruthy()
  });
})