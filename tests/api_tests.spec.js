import { test, expect } from '@playwright/test';

// POST Request
test('API POST Request', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    json: {
      name: 'Janos',
      job: 'student',
    },
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  console.log('POST response:', body);
  expect(body.name).toBe('Janos');
  expect(body.job).toBe('student');
});

// PUT Request
test('API PUT Request', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/2', {
    json: {
      name: 'Janos',
      job: 'student',
    },
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log('PUT response:', body);
  expect(body.name).toBe('Janos');
  expect(body.job).toBe('student');
});

// DELETE Request
test('API DELETE Request', async ({ request }) => {
  const response = await request.delete('https://reqres.in/api/users/2');

  expect(response.status()).toBe(204);
  console.log('DELETE completed with status:', response.status());
});

// GET Request
test('API GET Request', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2');

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log('GET response:', body);
  expect(body.data.first_name).toBe('Janet');
});
