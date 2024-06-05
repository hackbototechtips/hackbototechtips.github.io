function navHamburger() {
  var x = document.getElementById("Nav");
  if (x.className === "nav") {
      x.className += " responsive";
  } else {
      x.className = "nav";
  }
  updateAsideHeight(); // Update the aside height whenever the hamburger is clicked
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

(function() {
function isiPadInLandscape() {
  var ua = navigator.userAgent;
  var isiPad = /iPad/.test(ua) && !window.MSStream;
  var isLandscape = Math.abs(window.orientation) === 90;
  return isiPad && isLandscape;
}

function isOldSafari() {
  var ua = navigator.userAgent;
  var isSafari = ua.indexOf('Safari') !== -1 && ua.indexOf('Version') !== -1;
  if (isSafari) {
    var versionMatch = ua.match(/Version\/([\d.]+)/);
    if (versionMatch) {
      var version = parseFloat(versionMatch[1]);
      return version < 10;
    }
  }
  return false;
}

function updateSafariClass() {
  if (isiPadInLandscape() && isOldSafari()) {
    document.documentElement.classList.add('safari9');
  } else {
    document.documentElement.classList.remove('safari9');
  }
}

// Initial check
updateSafariClass();

// Listen for orientation changes
window.addEventListener('orientationchange', updateSafariClass);
})();
