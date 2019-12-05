const datenovo = () => {
  let d = new Date();
  const datenovo = document.body.querySelector("div.datenovo")
  if (datenovo) {
    datenovo.innerText = "Today's date is " + d;
  }
};

export { datenovo };
