window.addEventListener("load", changeTransactionPageContent());

function changeTransactionPageContent() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const src = urlParams.get("src");
  const nftName = urlParams.get("nftName");
  const currentBid = urlParams.get("currentBid");

  if (src) {
    let transactionNFTImage = document.getElementById("transactionNFTImage");
    transactionNFTImage.setAttribute("src", src);
  }

  if (nftName) {
    let transatctionNFTName = document.getElementById("transatctionNFTName");
    transatctionNFTName.textContent = nftName;
  }

  if (nftName) {
    let transatctionNFTName = document.getElementById("transatctionNFTName");
    transatctionNFTName.textContent = nftName;
  }

  if (currentBid) {
    let transactionCurrentBid = document.getElementById(
      "transactionCurrentBid"
    );
    transactionCurrentBid.textContent = currentBid + " ETH";
  }
}
