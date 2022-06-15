import { defineManifest } from '@crxjs/vite-plugin'

// import to `vite.config.ts`
export default defineManifest({
  name: 'Chaos Clipper',
  version: '1.0.0',
  manifest_version: 3,
  background: {
    service_worker: 'src/background.ts',
  },
  permissions: ['storage', 'activeTab', 'scripting', 'contextMenus', 'tabs', 'notifications'],
  host_permissions:
    ['https://*/*', 'http://*/*'],
  content_scripts: [
    {
      matches:
        ['https://*/*', 'http://*/*'],
      js: ['src/content/index.ts'],
    },
  ],
  action: {
    default_icon: { // optional
      16: 'src/assets/logo16.png', // optional
      24: 'src/assets/logo24.png', // optional
      32: 'src/assets/logo32.png', // optional
    },
  },
})
