let isEnabled = false;

// Load the initial state from storage
chrome.storage.local.get(["isEnabled"], function (result) {
  isEnabled = result.isEnabled || false;
  updateBadge();
});

// Listen for tab updates
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    isEnabled &&
    changeInfo.url &&
    changeInfo.url.includes(".com/job") != changeInfo.url.includes(".com/jobs")
  ) {
    const newUrl = changeInfo.url.replace("/job", "/ssr-job");
    chrome.tabs.update(tabId, { url: newUrl });
  }
});

// Listen for icon click
chrome.action.onClicked.addListener(function () {
  isEnabled = !isEnabled;
  chrome.storage.local.set({ isEnabled: isEnabled }, function () {
    updateBadge();
  });
});

// Update the badge text to reflect the current state
function updateBadge() {
  const text = isEnabled ? "ON" : "OFF";
  chrome.action.setBadgeText({ text: text });
  chrome.action.setBadgeBackgroundColor({ color: isEnabled ? "green" : "red" });
}
