import { test, except } from '@playwright/test'

test.describe('Test boxs routes', () => {
  test.beforeEach(async ({ request }) => {
    const login = await request.post('/auth/login')
    except(login.ok()).toBeTruthy()
  })
})
