import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Water Flow',
  webDir: 'build',
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  },
  server: {
    allowNavigation: ['http://192.168.127.60:3000/'],
    androidScheme: 'http',
    cleartext: true
  }
};

export default config;
