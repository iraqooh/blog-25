import { Client, Databases } from 'appwrite';

const client = new Client();

// client
//     .setEndpoint(import.meta.env.VITE_ENDPOINT)
//     .setEndpoint(import.meta.env.VITE_PROJECT_ID)

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66c6b7a100046e1a76ba');

const databases = new Databases(client);

export { client, databases }