const mockTabs = (chrome) => {
  const mockTab = { url: "https://www.google.com", title: "New Bookmark" };

  chrome.tabs.query.mockImplementation((_, callback) => {
    if (callback) {
      callback([mockTab]);
    }
  });
};

export default mockTabs;
