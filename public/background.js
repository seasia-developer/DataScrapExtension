let toggle = false;
let tabStatus = "byDefault";
const onError = (error) => {};

const sendMessage = (tabs) => {
  for (let tab of tabs) {
    let actionEnabled = true;
    chrome.action.onClicked.addListener(() => {
      if (actionEnabled) {
        chrome.action.disable(tab.id);
        actionEnabled = true;
      }
      chrome.runtime.onMessage.addListener(function (request) {
        if (request.message == "enable") {
          if (actionEnabled) {
            chrome.action.enable(tab.id);
            actionEnabled = false;
          }
        }
      });
    });
    setTimeout(() => {
      chrome.tabs
        .sendMessage(tab.id, { status: "byDefault" })
        .then((response) => {})
        .catch(onError);
    }, 100);
  }
};

const sendMessageToTabs = (tabs) => {
  switch (tabStatus) {
    case "close":
      for (let tab of tabs)
        chrome.tabs
          .sendMessage(tab.id, { status: "close" })
          .then((response) => {})
          .catch(onError);
      break;
    case "minimize":
      for (let tab of tabs)
        chrome.tabs
          .sendMessage(tab.id, { status: "minimize" })
          .then((response) => {})
          .catch(onError);
      break;
    default:
      for (let tab of tabs)
        chrome.tabs
          .sendMessage(tab.id, { status: "byDefault" })
          .then((response) => {})
          .catch(onError);
  }
};

chrome.action.onClicked.addListener(() => {
  chrome.tabs
    .query({
      active: true,
      currentWindow: true,
    })
    .then(sendMessage)
    .catch(onError);
  toggle = true;
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (toggle === true && tab.active) {
    chrome.tabs
      .query({
        active: true,
        currentWindow: true,
      })
      .then(sendMessageToTabs)
      .catch(onError);
  }
});

chrome.runtime.onMessage.addListener((request) => {
  switch (request.response) {
    case "close":
      toggle = false;
      tabStatus = "close";
      break;
    case "minimize":
      tabStatus = "minimize";
      break;
    default:
      tabStatus = "open";
  }
});
