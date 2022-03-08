document.addEventListener('mouseup', getWord)
var selection = "";

function getWord() {
  selection = document.getSelection().toString();
  if (selection != "" && selection != " ") {
    selection = selection.split(" ")[0]
    let msg = {
      "selection": selection
    }
    chrome.runtime.sendMessage(msg);
    console.log(selection);
  }
}