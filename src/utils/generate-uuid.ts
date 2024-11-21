import { Folder } from "../types/Folder";
import { v4 as uuidv4 } from "uuid";

export function prepareWithUUID<T extends { [key: string]: any }>(data: T): T & { id: string } {
    return { ...structuredClone(data), id: uuidv4() };
}

export function generateUUIDForFolder(folder: Folder): Folder {
    if (folder.children?.length) {
        folder.children = folder.children.map((child) => generateUUIDForFolder(child));
    }

    const newFolder = prepareWithUUID(folder);

    return newFolder;
}
