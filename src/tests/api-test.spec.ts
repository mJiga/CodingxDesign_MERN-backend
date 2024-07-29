import { test, expect } from 'playwright/test';
import 'dotenv/config'; // Load environment variables from a .env file

const PORT = process.env.PORT || 7000;

test.describe('Initial Backend API Tests', () => {
  // Define your backend URL here
  const backendUrl = `http://localhost:${PORT}`;

  // suggested test naming convention: "should [action]"
  
  test('should return status 200 for a valid GET request', async ({ request }) => {
    const response = await request.get(`${backendUrl}/api/@test`);
    expect(response.status()).toBe(200);
  });

  test('should return correct message for a valid GET request', async ({ request }) => {
    const response = await request.get(`${backendUrl}/api/@test`);

    const responseBody = await response.json();

    expect(responseBody.message).toEqual('Server is running');
  });

  test('should successfully post and retrieve a resource', async ({ request }) => {
    // First, let's create a resource
    const createResponse = await request.post(`${backendUrl}/resources`, {
      data: {
        userId: '12345',
        username: 'testuser',
        startDate: '2023-07-01',
        endDate: '2023-07-07',
        destination: 'Test City'
      }
    });

    expect(createResponse.ok()).toBeTruthy();
    const createdResource = await createResponse.json();
    expect(createdResource.id).toBeDefined();

    // Now, let's retrieve the created resource
    const getResponse = await request.get(`${backendUrl}/resources/${createdResource.id}`);
    expect(getResponse.ok()).toBeTruthy();
    const retrievedResource = await getResponse.json();

    // Verify that the retrieved resource matches what we created
    expect(retrievedResource).toEqual(createdResource);
  });
});