import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'privacy-screen-test',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
