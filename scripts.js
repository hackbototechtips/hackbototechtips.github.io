function navHamburger() {
	var x = document.getElementById("Nav");
	var header = document.querySelector('header');
	var button = document.querySelector('.nav .icon');
	if (x.className === "nav") {
		x.className += " responsive";
		header.classList.add('responsive');
		button.textContent = '☰Close';
	} else {
		x.className = "nav";
		header.classList.remove('responsive');
		button.textContent = '☰More';
	}
	updateAsideHeight(); //Aside fix
}
//Fix aside
function updateAsideHeight() {
	const header = document.querySelector('header');
	const nav = document.querySelector('nav');
	const footer = document.querySelector('footer');
	const aside = document.querySelector('aside');
	if (!aside) {
		return;
	}
	const headerHeight = header ? header.offsetHeight : 0;
	const navHeight = nav ? nav.offsetHeight : 0;
	const footerHeight = footer ? footer.offsetHeight : 0;
	const totalHeight = headerHeight + navHeight;
	const availableHeight = window.innerHeight - totalHeight - footerHeight;
	aside.style.top = `${totalHeight}px`;
	aside.style.height = `${availableHeight}px`;
}
window.addEventListener('resize', updateAsideHeight);
window.addEventListener('load', updateAsideHeight);
document.addEventListener('DOMContentLoaded', function() {
	//Target <img> elements
	const images = document.getElementsByTagName('img');
	//Event listener for <img> elements
	Array.from(images).forEach(function(image) {
		image.addEventListener('click', function() {
		enlargeImage(image);
		});
	});
	//Enlage img
	function enlargeImage(imageElement) {
	const enlargedSrc = imageElement.src;
	const modal = document.createElement('div');
	modal.classList.add('modal');
	const enlargedImage = document.createElement('img');
	enlargedImage.src = enlargedSrc;
	enlargedImage.classList.add('enlarged-image');
	// Click to close
	modal.addEventListener('click', function () {
		setTimeout(function () {
			modal.remove();
			imageElement.style.opacity = '1';
		});
	});
	modal.appendChild(enlargedImage);
	document.body.appendChild(modal);
	imageElement.style.opacity = '0';
}
});