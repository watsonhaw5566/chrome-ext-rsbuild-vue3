import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  dev: {
    client: {
      host: '0.0.0.0',
      protocol: 'ws',
    },
    writeToDisk: true,
  },
  server: {
    strictPort: true,
    publicDir: {
      copyOnBuild: false,
    },
    printUrls: false,
  },
  output: {
    filenameHash: false,
    distPath: {
      js: 'js',
      html: '',
    },
  },
  environments: {
    web: {
      plugins: [pluginVue()],
      source: {
        entry: {
          popup: './src/popup/main.js',
          options: './src/options/main.js',
          content: './src/content/index.js',
        },
      },
      html: {
        pages: [
          { filename: 'popup.html', title: 'Popup', entry: 'popup' },
          { filename: 'options.html', title: 'Options', entry: 'options' },
        ],
      },
      output: {
        target: 'web',
        copy: [{ from: './public' }],
      },
    },
    webworker: {
      source: {
        entry: {
          background: './src/background/index.js',
        },
      },
      output: {
        target: 'web-worker',
      },
    },
  },
});

