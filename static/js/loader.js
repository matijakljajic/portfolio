document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".static").style.visibility = "visible";
    document.querySelector(".vignette").style.visibility = "initial";
    document.querySelector(".scanlines").style.visibility = "initial";
  } else {
    setTimeout(function() {
      document.querySelector(".static").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
    }, 500);
  }
};
