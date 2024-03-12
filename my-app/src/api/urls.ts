export const domain = "https://saurav.tech/NewsAPI";
export const API_MODE = "/top-headlines/category";

export const urls = {
    get: {
       category: (category:string) => `/${category}/us.json`
    },
};
