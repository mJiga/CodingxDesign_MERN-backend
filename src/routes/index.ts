// routing for

import { Router } from 'express';
import { Request, Response } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();


// cleans file name for each file (removes .ts)
const cleanFileName = (fileName: string) => {
    return fileName.split('.').shift();
}

// displays each file in routes dir but index -> dynamic route changer.
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== 'index'){
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`loading route... /${cleanName}`)
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
});

export { router };