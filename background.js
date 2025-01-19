setInterval(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.cookies.set({
          url: "https://www.tiktok.com/",
          name: "store-country-code",
          value: "nl",
          domain: ".tiktok.com",
          path: "/"
        });
        console.log("cookie set");
      }
    });
}, 1000);
