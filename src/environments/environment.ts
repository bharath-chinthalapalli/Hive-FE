// https://www.builder.io/c/docs/using-your-api-key
export const environment = {
  production: false,
  builderApiKey: "80db7a94ff96497195a901986eba8c45",
  // Add your API endpoints
  apiUrl: 'http://localhost:3000/api',
  // Add feature flags
  enableDebug: true,
  // Add authentication settings
  authEnabled: true,
  // Add other third-party service configurations
  googleAnalyticsId: '',
  // Add any other environment-specific variables
  version: '1.0.0',
  HIVE_OWN_BASE_URL:'http://104.155.25.138:3000/v1/mail/',
  recaptcha: {
    siteKeyV2: '',
    siteKeyV3: '6LeTQoQrAAAAAAKzOjSQYc3EgL2Makmz3XGCRE00'
  }
};
