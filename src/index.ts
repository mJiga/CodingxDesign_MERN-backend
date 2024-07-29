/**
 * server.ts
 * 
 * This file sets up and runs an Express server with MongoDB integration and basic CRUD operations.
 * It serves as an example for a MERN (MongoDB, Express, React, Node.js) stack backend.
 */

// Import required modules
import 'dotenv/config'; // Load environment variables from a .env file
import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';
import { router } from './routes';

/**
 * PORT
 * 
 * The port number on which the server will listen.
 * It's set from the environment variable PORT, or defaults to 7000 if not provided.
 */
const PORT = process.env.PORT || 7000;

/**
 * Express Application
 * 
 * Create an instance of an Express application.
 * This is the core of our server, where we'll add middleware and define routes.
 */
const be_server = express();

/**
 * Middleware
 * 
 * These are functions that have access to the request and response objects.
 * They can execute any code, make changes to the request and response objects,
 * end the request-response cycle, or call the next middleware function.
 */

// Parse incoming requests with JSON payloads
be_server.use(express.json());

// Parse incoming requests with URL-encoded payloads
be_server.use(express.urlencoded({ extended: true }));

// Enable CORS (Cross-Origin Resource Sharing) for all routes (for security purposes)
be_server.use(cors());

/**
 * Test Route
 * 
 * A simple GET route to check if the server is running.
 * 
 * NOTE: We will use Playwright to do testing in further lessons (refer to test folder)
 */
be_server.get('/api/@test', (req: Request, res: Response) => {
    res.json({ message: 'Server is running' });
});

/**
 * Custom Routes
 * 
 * Refer to 'routes' folder
 * Include routes defined in a separate file.
 * This helps in organizing code and keeping this main file clean.
 */
be_server.use(router);


/**
 * Start Server
 * 
 * Start the Express server and have it listen on the specified port.
 */
be_server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

/**
 * In-Memory Resource Storage
 * 
 * This array simulates a database for demonstration purposes.
 * In a real application, you would use MongoDB to store and retrieve data.
 */
const resources: any[] = [];

/**
 * CRUD Operations for Resources (PURE API IMPLEMENTATION)
 * 
 * HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web, it is how computers interact with data.
 * The main HTTP methods used in RESTful APIs are:
        GET: Retrieve data
        POST: Create new data
        PUT: Update existing data
        DELETE: Remove data
 * These routes demonstrate basic Create, Read, Update, and Delete operations.
 * In a real application, these would interact with a MongoDB database (future lesson).
*/


/**
 * GET /resources
 * 
 * Retrieve all resources
 */
export const getResource = be_server.get('/resources', (req, res) => {
    res.status(200).send(resources);
});

/**
 * GET /resources/:id
 * 
 * Retrieve a resource by its ID.
 */
export const getResources = be_server.get('/resources/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const item = resources.find((item) => item.id === id);
    if (!item) return res.status(404).send('Resource not found');
    res.status(200).json(item);
});

/**
 * POST /resources
 * 
 * Create a new resource.
 */
export const createResources = be_server.post('/resources', (req: Request, res: Response) => {
    if (!req.body) return res.status(400).send('Request body is required');
    
    const item = req.body;
    if (!item.id) item.id = Math.floor(Math.random() * 1000);
    
    resources.push(item);
    res.status(200).json(item);
});

/**
 * PUT /resources/:id
 * 
 * Update an existing resource.
 */
export const updateResource = be_server.put('/resources/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = resources.find((item) => item.id === id);
    if (!item) return res.status(400).send('item null');
    
    const newInformation = req.body;
    if (!newInformation) res.status(400).send('No body provided');

    if (newInformation.userId) item.userId = newInformation.userId;

    if (newInformation.username) item.username = newInformation.username;
    
    if (newInformation.startDate) item.startDate = newInformation.startDate;

    if (newInformation.endDate) item.endDate = newInformation.endDate;

    if (newInformation.destination) item.destination = newInformation.destination;
});

/**
 * DELETE /resources/:id
 * 
 * Remove a resource.
 */
export const deleteResource = be_server.delete('/resources/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const itemIndex = resources.findIndex((item) => item.id === id);
    if (itemIndex === -1) return res.status(404).send('Resource not found');
    
    resources.splice(itemIndex, 1);
    res.status(200).send('Resource deleted');
});

/**
 * Export the Express application
 * 
 * This allows the app to be imported and used in other files,
 * which is useful for testing or if you want to structure your
 * application with the server setup in a separate file.
 * 
 * In addition to this, we have added an export statements to each
 * function we have created, allowing us to use them in other files (refer to routes folder)
 * In our resources.ts file (inside routes folder), we've mapped these HTTP methods to corresponding CRUD operations.   
 */
export default be_server;