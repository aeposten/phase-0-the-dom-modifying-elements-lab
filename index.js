const removeMain = document.getElementById(`main`);
removeMain.remove();

const newHeader = document.createElement(`h1`);
newHeader.textContent = `YOUR-NAME is the champion`;
newHeader.id = `victory`;
