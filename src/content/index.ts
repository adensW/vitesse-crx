import { createApp } from 'vue'
import App from './App.vue'
 // mount component to context window
 const container = document.createElement('div')
 const root = document.createElement('div')
//  const styleEl = document.createElement('link')
//  const shadowDOM = container.attachShadow?.({ mode: process.env.NODE_ENV !== 'production' ? 'open' : 'closed' }) || container
//  styleEl.setAttribute('rel', 'stylesheet')
//  styleEl.setAttribute('href', chrome.runtime.getURL('dist/content/style.css'))
//  shadowDOM.appendChild(styleEl)
//  shadowDOM.appendChild(root)
container.appendChild(root)
document.body.appendChild(container)
 createApp(App).mount(root)