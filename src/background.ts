// import scriptPath from './content/index?script'
import { sendMessage } from 'webext-bridge'
console.log("1")
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener(async (tab) => {
    console.log(tab)
    sendMessage('clipper-awake',  { awake: true },  `content-script@${tab.id}`)
    // chrome.scripting.executeScript({
    //   target: { tabId: tab.id as number },
    //   files: [scriptPath],
    // })
  })
})

