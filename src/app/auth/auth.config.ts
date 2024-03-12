import { PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
              authority:  'identidad',
              redirectUrl: 'elmismoconfigurado aguas revisar si no hay subruta dashboard',
              postLogoutRedirectUri: 'IGual que el anterior',
              clientId: 'Id ',
              scope:  'openid profile offline_access' , // + your scopes
              responseType: 'code',
              silentRenew: true,
              useRefreshToken: true,
              renewTimeBeforeTokenExpiresInSeconds: 30,
          }
}
