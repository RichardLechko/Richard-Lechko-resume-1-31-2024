function upToDate() {
  var latestDate = new Date(document.lastModified);
  document.getElementById("lastModifiedTxt").innerHTML =
    "Last Modified: " + latestDate;
}
