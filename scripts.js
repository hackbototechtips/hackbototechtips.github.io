function navHamburger() {
  var x = document.getElementById("Nav");
  var header = document.querySelector('header');  // Select the header element
  var button = document.querySelector('.nav .icon');

  // Toggle the "responsive" class on both the nav and the header
  if (x.className === "nav") {
      x.className += " responsive";
      header.classList.add('responsive');  // Add 'responsive' class to header
      button.textContent = '☰Close';
  } else {
      x.className = "nav";
      header.classList.remove('responsive');  // Remove 'responsive' class from header
      button.textContent = '☰More';
  }

  updateAsideHeight(); // Update the aside height when clicked
}
// Fixes the aside bar
function updateAsideHeight() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const aside = document.querySelector('aside');
  
    if (!aside) {
      // If no aside element is found, exit the function
      return;
    }
  
    const headerHeight = header ? header.offsetHeight : 0;
    const navHeight = nav ? nav.offsetHeight : 0;
    const totalHeight = headerHeight + navHeight;
    const availableHeight = window.innerHeight - totalHeight;
    
    aside.style.top = `${totalHeight}px`;
    aside.style.height = `${availableHeight}px`;
  }
  
  window.addEventListener('resize', updateAsideHeight);
  window.addEventListener('load', updateAsideHeight);
  

document.addEventListener('DOMContentLoaded', function() {
  // Get all <img> elements on the page
  const images = document.getElementsByTagName('img');

  // Attach click event listener to each <img> element
  Array.from(images).forEach(function(image) {
      image.addEventListener('click', function() {
          enlargeImage(image);
      });
  });

  // Function to enlarge the clicked image
  function enlargeImage(imageElement) {
      const enlargedSrc = imageElement.src; // Get the source of the clicked image

      // Create a modal for enlarged image
      const modal = document.createElement('div');
      modal.classList.add('modal'); // Add 'modal' class from CSS

      const enlargedImage = document.createElement('img');
      enlargedImage.src = enlargedSrc;
      enlargedImage.classList.add('enlarged-image'); // Add 'enlarged-image' class from CSS

      // Create a close button
      const closeButton = document.createElement('button');
      closeButton.textContent = 'X';
      closeButton.classList.add('close-button');
      closeButton.addEventListener('click', function() {
          // Remove modal from DOM
          modal.classList.add('fade-out');
          setTimeout(function() {
              modal.remove();
              // Reset opacity of original image
              imageElement.style.opacity = '1';
          }, 100); // Match the duration of the fade-out animation
      });

      modal.appendChild(enlargedImage);
      modal.appendChild(closeButton); // Append the close button to the modal

      // Append the modal to the body
      document.body.appendChild(modal);

      // Reduce opacity of original image
      imageElement.style.opacity = '0';
  }
});


