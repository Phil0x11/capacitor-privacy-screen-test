import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'privacy-screen-test',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    PrivacyScreen: {
      enable: false,
      imageName: "Splashscreen",
    },
  },
};

export default config;
