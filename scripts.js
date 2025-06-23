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
	const footer = document.querySelector('footer'); // New line
	const aside = document.querySelector('aside');
	if (!aside) {
		return;
	}
	const headerHeight = header ? header.offsetHeight : 0;
	const navHeight = nav ? nav.offsetHeight : 0;
	const footerHeight = footer ? footer.offsetHeight : 0; // New line
	const totalHeight = headerHeight + navHeight;
	const availableHeight = window.innerHeight - totalHeight - footerHeight; // Updated line
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
		const enlargedSrc = imageElement.src; //Fetch img source
		//Add modal for img
		const modal = document.createElement('div');
		modal.classList.add('modal'); //Add 'modal' class
		const enlargedImage = document.createElement('img');
		enlargedImage.src = enlargedSrc;
		enlargedImage.classList.add('enlarged-image'); //Add 'enlarged-image' class
		//Add close button
		const closeButton = document.createElement('button');
		closeButton.textContent = 'X';
		closeButton.classList.add('close-button');
		closeButton.addEventListener('click', function() {
			//Remove modal from DOM
			setTimeout(function() {
				modal.remove();
				//Show original image
				imageElement.style.opacity = '1';
			});
		});
		modal.appendChild(enlargedImage);
		modal.appendChild(closeButton); //Close button
		//Append the modal to the body
		document.body.appendChild(modal);
		//Hide original img
		imageElement.style.opacity = '0';
	}
});