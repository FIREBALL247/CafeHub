// Get the arrow element
    const backToTopButton = document.getElementById("back2top");

    // Show or hide the button when scrolling
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // When the user clicks the arrow, scroll to the top
    backToTopButton.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Adds a smooth scrolling effect
        });
    };

// Menu bar
    let menu = document.querySelector(".menu-icon");
    let nav = document.querySelector(".nav-menu");


menu.onclick = () => {
    menu.classList.toggle("move");
    nav.classList.toggle("open-menu");
   
}

// Close menu on scroll

window.onscroll = () =>{
    menu.classList.remove("move");
    nav.classList.remove("open-menu");
}





// Get the form element
const form = document.getElementById('contact-formm');

// Add an event listener for form submission
form.addEventListener('submit', validateForm);

// Validation function
function validateForm(event) {
  // Prevent default form submission
  event.preventDefault();

  // Get form elements
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  // Name validation
  if (!/^[a-zA-Z ]+$/.test(name)) {
    alert('Name can only contain letters and spaces.');
    return;
  }

  // Phone validation
  if (phone.length < 8  && phone.length > 11) {
    alert('Phone number must be between 8 and 11 digits.');
    return;
  }
  if (!/^[0-9]+$/.test(phone)) {
    alert('Phone number can only contain digits.');
    return;
  }

  // Email validation
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    alert('Invalid email address.');
    return;
  }

  form.reset();
}

