// import scriptPath from './content/index?script'
import { sendMessage } from 'webext-bridge'
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener(async (tab) => {
    sendMessage('clipper-awake', { awake: true }, `content-script@${tab.id}`)
  })
})

