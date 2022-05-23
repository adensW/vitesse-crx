import { defineDynamicResource, defineManifest } from '@crxjs/vite-plugin'

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
      process.env.NODE_ENV !== 'production'
        ? [
            'https://adens.cn/*',
            'http://adens.cn/*',
            'https://brain.pi.wangdingchen.com/*',
            'http://brain.pi.wangdingchen.com/*',
          ]
        : ['https://*/*', 'http://*/*'],
  web_accessible_resources: [defineDynamicResource({
    matches: process.env.NODE_ENV !== 'production'
      ? [
          'http://adens.cn/*',
          'https://adens.cn/*',
          'https://brain.pi.wangdingchen.com/*',
          'http://brain.pi.wangdingchen.com/*',
        ]
      : ['https://*/*', 'http://*/*'],
    // copies all png files in src/images
  })],
  content_scripts: [
    {
      matches:
          process.env.NODE_ENV !== 'production'
            ? [
                'http://adens.cn/*',
                'https://adens.cn/*',
                'https://brain.pi.wangdingchen.com/*',
                'http://brain.pi.wangdingchen.com/*',
              ]
            : ['https://*/*', 'http://*/*'],
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
// const manifest = {
//   name: 'Chaos Clipper',
//   version: '1.0.0',
//   manifest_version: 3,
//   background: {
//     service_worker: 'src/background.ts',
//   },
//   permissions: ['storage', 'activeTab', 'scripting', 'contextMenus', 'tabs', 'notifications'],
//   host_permissions:
//     process.env.NODE_ENV !== 'production'
//       ? [
//         'https://adens.cn/*',
//         'http://adens.cn/*',
//         'https://brain.pi.wangdingchen.com/*',
//         'http://brain.pi.wangdingchen.com/*',
//       ]
//       : ['https://*/*', 'http://*/*'],
//   content_scripts: [
//     {
//       matches:
//         process.env.NODE_ENV !== 'production'
//           ? [
//             'http://adens.cn/*',
//             'https://adens.cn/*',
//             'https://brain.pi.wangdingchen.com/*',
//             'http://brain.pi.wangdingchen.com/*',
//           ]
//           : ['https://*/*', 'http://*/*'],
//       js: ['src/content/index.ts'],
//     },
//   ],
//   action: { default_popup: 'src/popup/index.html' },

// }

// export default manifest
