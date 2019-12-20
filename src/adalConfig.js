import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
  tenant: 'tenant.onmicrosoft.com',
  clientId: 'clientId',
  endpoints: {
    api: 'clientId',
  },
  cacheLocation: 'localStorage',
  postLogoutRedirectUri: 'http://localhost:3000/home',
  redirectUri: 'http://localhost:3000/dashboard',
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
