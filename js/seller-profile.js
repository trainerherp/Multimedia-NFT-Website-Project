window.addEventListener("load", changeTransactionPageContent());

function changeTransactionPageContent() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const src = urlParams.get("src");
  const name = urlParams.get("name");

  if (src) {
    let sellerPhoto = document.getElementById("sellerPhoto");
    sellerPhoto.setAttribute("src", src);
  }

  if (name) {
    let sellerName = document.getElementById("sellerName");
    sellerName.textContent = name;
  }

  
}
