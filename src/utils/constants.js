export const ENV = {
  SERVER_HOST: 'http://localhost:1337',
  API_URL: 'http://localhost:1337/api', 
  /* SERVER_HOST: 'https://vocal-coach-strapi.onrender.com',
  API_URL: 'https://vocal-coach-strapi.onrender.com/api', */
  ENDPOINTS: {
    AUTH: {
      REGISTER: 'auth/local/register',
      LOGIN: 'auth/local'
    },
    USERS: 'users',
    USERS_ME: 'users/me',
    HOMEBANNERMOBILE: 'homebanner-mobiles',
    HOMEBANNERPC: 'homebanner-pcs',
    COMENTS: 'coments',
    PRODUCTS: 'products',
    WISHLIST: 'wishlists'
  },
  TOKEN: 'token'
}

