//This is used to activate the hamburger menu.
function navHamburger() {
    var x = document.getElementById("Nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
  }
}
// Fixes the aside bar
function updateAsideHeight() {
  const headerHeight = document.querySelector('header').offsetHeight;
  const navHeight = document.querySelector('nav').offsetHeight;
  const aside = document.querySelector('aside');
  const totalHeight = headerHeight + navHeight;
  const availableHeight = window.innerHeight - totalHeight;
  aside.style.top = `${totalHeight}px`;
  aside.style.height = `${availableHeight}px`;
}

window.addEventListener('resize', updateAsideHeight);
window.addEventListener('load', updateAsideHeight);

function isSafari9() {
  var userAgent = navigator.userAgent.toLowerCase();
  return userAgent.indexOf('safari/') > -1 && userAgent.indexOf('version/9') > -1;
}

if (isSafari9()) {
  var articleColumn = document.querySelector('.articlecolumn');
  if (articleColumn) {
      articleColumn.classList.add('safari9');
  }
}
