export const PRODUCTION_MODE = !!import.meta.env.PROD;
export const TESTING_MODE = import.meta.env.MODE === "test";
