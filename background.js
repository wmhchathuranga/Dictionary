chrome.runtime.onMessage.addListener(gotWord);

function gotWord(message, sender, sendResponse) {
  window.word = message.selection;
  console.log(message.selection);

  chrome.browserAction.setBadgeText({
    text: "1"
  });

  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${message.selection}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      window.definitions = myJson[0].meanings[0].definitions;
      for (def of definitions)
        console.log(def.definition)
    });
}