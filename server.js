import { config } from "./src/config/config.js";
import { store } from "./src/storage.js";

console.log('server.js',config.get('apiKey'));


store();