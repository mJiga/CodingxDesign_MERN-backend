import { test, expect } from 'playwright/test';
import { deleteResource } from '../backend/src/index'

const PORT = 7000;

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

  test('should retrieve a specific resource by ID', async ({ request }) => { 
    const newResource = { name: 'Test Resource' }; 
    const postResponse = await request.post(`${backendUrl}/resources`, { data: newResource });
    const createdResource = await postResponse.json();
    const response = await request.get(`${backendUrl}/resources/${createdResource.id}`);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toEqual(createdResource);
  });

  test('should delete an existing resource', async ({ request }) => { 
    const newResource = { name: 'Test Resource' };
  
    // Create the resource
    const postResponse = await request.post(`${backendUrl}/resources`, { data: newResource });
    expect(postResponse.status()).toBe(200);
    const createdResource = await postResponse.json();
  
    // Delete the resource
    const deleteResponse = await request.delete(`${backendUrl}/resources/${createdResource.id}`);
    expect(deleteResponse.status()).toBe(200);
    const deleteResponseBody = await deleteResponse.text();
    expect(deleteResponseBody).toBe('Resource deleted'); 
  
    // Verify the resource no longer exists
    const getResponse = await request.get(`${backendUrl}/resources/${createdResource.id}`);
    expect(getResponse.status()).toBe(404);
  });
  
});