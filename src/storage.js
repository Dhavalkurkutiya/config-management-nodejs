import { config } from "./config/config.js";

export function store(){
    console.log('store.js', config.get('apiKey'));
}