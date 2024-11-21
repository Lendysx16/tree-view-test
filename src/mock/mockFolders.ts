import { Folder } from "../types/Folder";
import { generateUUIDForFolder } from "../utils/generate-uuid";

const mockFolders: Folder[] = [
    {
        id: 1,
        name: "Root Folder",
        children: [
            {
                id: 1,
                name: "Documents",
                children: [
                    {
                        id: 1,
                        name: "Work",
                        children: [
                            {
                                id: 1,
                                name: "Project A",
                            },
                            {
                                id: 1,
                                name: "Project B",
                            },
                        ],
                    },
                    {
                        id: 1,
                        name: "Personal",
                        children: [
                            {
                                id: 1,
                                name: "Photos",
                                children: [
                                    {
                                        id: 1,
                                        name: "Summer 2021",
                                    },
                                    {
                                        id: 1,
                                        name: "Winter 2020",
                                    },
                                    {
                                        id: 1,
                                        name: "Spring 2019",
                                    },
                                ],
                            },
                            {
                                id: 1,
                                name: "Videos",
                            },
                        ],
                    },
                ],
            },
            {
                id: 1,
                name: "Downloads",
                children: [
                    {
                        id: 1,
                        name: "Software",
                        children: [
                            {
                                id: 1,
                                name: "Project A",
                            },
                            {
                                id: 1,
                                name: "Project B",
                            },
                        ],
                    },
                    {
                        id: 1,
                        name: "Games",
                        children: [
                            {
                                id: 1,
                                name: "Action",
                                children: [
                                    {
                                        id: 1,
                                        name: "call_of_duty",
                                        children: [
                                            { id: 1, name: "Modern Warfare" },
                                            {
                                                id: 1,
                                                name: "Black Ops",
                                                children: [
                                                    { id: 1, name: "Black Ops 1" },
                                                    { id: 1, name: "Black Ops 2" },
                                                    { id: 1, name: "Black Ops 3" },
                                                    { id: 1, name: "Black Ops 4" },
                                                ],
                                            },
                                            { id: 1, name: "Warzone" },
                                            { id: 1, name: "Ghosts" },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 1,
                                name: "Adventure",
                                children: [{ id: 1, name: "Uncharted" }],
                            },
                            {
                                id: 1,
                                name: "RPG",
                                children: [
                                    {
                                        id: 1,
                                        name: "Baldur's Gate",
                                        children: [
                                            { id: 1, name: "Baldur's Gate 1" },
                                            { id: 1, name: "Baldur's Gate 2" },
                                            { id: 1, name: "Baldur's Gate 3" },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 1,
                        name: "Photos",
                    },
                    {
                        id: 1,
                        name: "Videos",
                    },
                ],
            },
        ],
    },
];

export default mockFolders.map((folder) => generateUUIDForFolder(folder));
