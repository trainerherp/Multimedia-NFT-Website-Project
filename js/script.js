// local auth

$("#myBid").on("focus", function () {
  $("#price").show("fast");
});

$("#myBid").on("focusout", function () {
  $("#price").slideUp("fast");
});

$("#myBid").on("input", function () {
  let converted = convertETH(this.value);
  if (!this.value) {
    $("#price span").text("0");
  }

  if (isNaN(converted)) {
    return;
  } else {
    $("#price span").text(convertETH(this.value).toLocaleString());
  }
});

function convertETH(value) {
  const eachPrice = 49194365;
  return parseFloat(value) * eachPrice;
}

function makeTimer() {
  let endTime = new Date("22 June 2022 16:50:00 GMT+07:00");
  endTime = Date.parse(endTime) / 1000;

  let now = new Date();
  now = Date.parse(now) / 1000;

  let timeLeft = endTime - now;

  let days = Math.floor(timeLeft / 86400);
  let hours = Math.floor((timeLeft - days * 86400) / 3600);
  let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  let seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }

  $("#days").html(days);
  $("#hours").html(hours);
  $("#minutes").html(minutes);
  $("#seconds").html(seconds);
}
makeTimer();

setInterval(() => {
  makeTimer();
}, 1000);
