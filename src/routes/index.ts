/**
 * index.ts (in the routes directory)
 * 
 * This file sets up dynamic routing for the Express application.
 * It automatically imports and configures routes from other files in the same directory.
 * 
 * Routes in Express.js define how an application responds to client requests to specific endpoints (URLs).
 * Each route can handle different HTTP methods (GET, POST, PUT, DELETE) for the same URL path.
 * In the main routing file, we're dynamically creating routes based on the file structure.
 * This is a scalable way to organize routes as your application grows.
 * In the resources route file, we define specific routes for handling
 * different operations on booking resources.
 */

import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 * cleanFileName
 * 
 * Removes the file extension from a filename.
 * @param fileName - The name of the file including its extension
 * @returns The filename without the extension
 */
const cleanFileName = (fileName: string) => {
    return fileName.split('.').shift();
}

/**
 * Dynamic Route Configuration
 * 
 * This section reads all files in the current directory and sets up routes
 * based on the file names. Each file (except index.ts) is treated as a separate route module.
 * 
 * For example, if there's a file named 'users.ts', it will create a route '/users'
 * and use the router exported from that file to handle requests to '/users'.
 */
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== 'index') {
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Loading route... /${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
});

export { router };