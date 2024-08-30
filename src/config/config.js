const _config = {
  apiKey: process.env.API_KEY,
};

export const config = {
  get(key) {
    const value = _config[key];
    if (!value) {
    console.log(`Tha ${key} variable is not found in the config file. Make sure you have added it to the config file`);
      process.exit();
    }
    return _config[key];
  },
};

