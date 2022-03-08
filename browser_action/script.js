let background = chrome.extension.getBackgroundPage();
let newWord = background.word;
let definitions = background.definitions;
definitions = Array.from(definitions);

let url = chrome.extension.getURL("browser_action/icon.png");
document.getElementById("logo-img").style["background-image"] = `url(${url})`;

if (newWord)
  document.getElementById('selected-word').innerText = newWord;

if (definitions) {
  document.getElementById("welcome").remove();
  let output = document.getElementById("output");
  for (def of definitions) {
    let hr = document.createElement("hr");
    let definition = document.createElement('p');
    definition.className = "definitions";
    output.appendChild(hr);
    definition.innerText = def.definition;
    output.appendChild(definition);
    console.log(def.definition);
    chrome.browserAction.setBadgeText({});
  }
}