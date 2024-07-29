/**
 * MVC Architecture:
 * - This file represents part of the Controller in an MVC (Model-View-Controller) architecture.
 * - It directs requests to the appropriate handler functions but doesn't contain business logic itself.
*/

import { Router } from 'express';

// Import controller functions
// These functions contain the actual logic for handling requests
import { 
    getResource, 
    getResources, 
    createResources, 
    updateResource, 
    deleteResource 
} from '..';

// Create a new router instance
// This router can be thought of as a "mini-app" capable of performing middleware and routing functions
const router = Router();

router.get('/', getResources);
router.get('/:id', getResource);
router.post('/', createResources);
router.put('/:id', updateResource);
router.delete('/:id', deleteResource);

export { router };