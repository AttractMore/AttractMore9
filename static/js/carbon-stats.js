const form = document.getElementById("carbon");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const bareUrl = form.elements["input-url"];
  const testUrl = encodeURIComponent(bareUrl.value.trim());
  const endPoint = `https://api.websitecarbon.com/site?url=${testUrl}`;
  console.log(endPoint);

  fetch(endPoint)
    .then(function (e) {
      console.log(e.status);
      if (!e.ok) throw Error(e);
      return e.json();
    })
    .then(function (n) {
      renderResult(n);
    })
    .catch(function (e) {
      console.log(e);
    });

  const renderResult = function (e) {
    console.log("Cleaner than " + e.p + "% of pages tested");
  };
});
