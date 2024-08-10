
document.addEventListener('DOMContentLoaded', function ()
 {
    // Select all navigation links inside the navbar
    const navLinks = document.querySelectorAll('.navbar a');

    // Loop through each navigation link
    navLinks.forEach(function (link)
     {
        // Add click event listener to each navigation link
        link.addEventListener('click', function (event) 
        {
            // Prevent the default action of the link 
            event.preventDefault();

            // Get the href attribute of the clicked link
            const targetId = link.getAttribute('href');

            // Select the target section based on the id obtained from the href attribute
            const targetSection = document.querySelector(targetId);

            // Scroll smoothly to the target section
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // If the navbar toggle button is active 
            const navbarToggle = document.querySelector('.navbar-toggle');
            if (navbarToggle.classList.contains('active')) {
                navbarToggle.classList.remove('active');
                document.querySelector('.navbar-collapse').classList.remove('show');
            }
        });
    });
});

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () 
{
    // Select the WhatsApp link by its id
    const whatsappLink = document.getElementById('whatsappLink');

    // Add click event listener to the WhatsApp link
    whatsappLink.addEventListener('click', function (event) {
        // Prevent the default action of the link (which is to navigate directly to the href URL)
        event.preventDefault();

        // Open the WhatsApp link in a new browser tab
        window.open(whatsappLink.href, '_blank');
    });
});