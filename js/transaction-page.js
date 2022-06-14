const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const src = urlParams.get("src");
console.log(src);

if (src) {
  let transactionNFTImage = document.getElementById("transactionNFTImage");
  transactionNFTImage.setAttribute("src", src);
}
