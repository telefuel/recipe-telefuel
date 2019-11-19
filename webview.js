module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const title = document.querySelector('title').innerText.match(/\((\d)\)$/);
    if (title[0]) {
      Franz.setBadge(title[0]);
    }
  };

  Franz.loop(getMessages);
}
