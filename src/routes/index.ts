import { Router } from "express";
import { Request, Response } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 * Cleans the file name by removing the file extension.
 *
 * @param {string} fileName - The name of the file to clean.
 * @returns {string} - The cleaned file name without the extension.
 */
const cleanFileName = (fileName: string): string => {
  return fileName.split(".").shift()!;
};

/**
 * Dynamically imports and sets up routes from files in the current directory.
 *
 * - Reads all files in the current directory.
 * - Filters out the `index` file to avoid loading itself.
 * - Dynamically imports each route module and registers it with the main router.
 * - Each route module must export a `router` instance.
 *
 * Example: If there is a file `courses.ts`, it will register a route `/courses`.
 */
readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`loading route... /${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
