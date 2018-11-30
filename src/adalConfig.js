import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
  tenant: 'tenant.onmicrosoft.com',
  clientId: '2ffb8050-3150-4d20-9f1e-2e7bf2d42',
  endpoints: {
    api: 'e93198fd-f287-4aad-99d1-4b543d420791',
  },
  cacheLocation: 'localStorage',
  postLogoutRedirectUri: 'http://localhost:3000/home',
  redirectUri: 'http://localhost:3000/dashboard',
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
