chrome.runtime.onInstalled.addListener(() => {
  console.log('Vue3 Rsbuild extension installed');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type === 'PING') {
    sendResponse({ type: 'PONG', from: 'background' });
  }
});
