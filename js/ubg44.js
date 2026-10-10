// Backlinks Go Here!
const backlinksList= [{}, {}];

function inFrame () {
  try {
      return window.self !== window.top;
  } catch (e) {
      return true;
  }
}

function botBrowser() {
try {
  return navigator.webdriver
} catch (e) {
    return true;
}
}

function desktopBrowser() {
  try {
    const w= window.screen.width;
    return (w>= 800);
  } catch (e) {
    return false;
  }
  return false;
}

function closeBacklinks() {
var el = document.getElementById("backlinksPlace");
if (el) el.style.display= "none";
return false;
}

function insertBacklinks() {
  if (inFrame()) {
    return false;
  }
  if (!desktopBrowser()) {
    return false;
  }
  return false;
}

addEventListener("load", insertBacklinks);
setTimeout(closeBacklinks, 5* 60* 1000);