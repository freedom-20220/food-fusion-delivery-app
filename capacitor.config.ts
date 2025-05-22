
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.5d4fa5ddbd8b47e09d39d51bfb04bd60',
  appName: 'eco-market-app',
  webDir: 'dist',
  server: {
    url: 'https://5d4fa5dd-bd8b-47e0-9d39-d51bfb04bd60.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystorePassword: null,
      keystoreAlias: null,
      keystoreAliasPassword: null,
      signingType: null,
    }
  }
};

export default config;
