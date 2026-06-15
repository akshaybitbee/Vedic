// Add simple scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle (basic implementation)
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileBtn.addEventListener('click', () => {
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = '#fff';
        navMenu.style.padding = '20px';
        navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        
        const ul = navMenu.querySelector('ul');
        ul.style.flexDirection = 'column';
        ul.style.gap = '20px';
    }
});

// WhatsApp Form Submission
const waForm = document.getElementById('whatsapp-form');
if (waForm) {
    waForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('patientName').value;
        const countryCode = document.getElementById('countryCode').value;
        const phoneInput = document.getElementById('patientPhone').value;
        const phone = `${countryCode} ${phoneInput}`;
        const time = document.getElementById('appointmentTime').value;
        const message = document.getElementById('patientMessage').value;
        
        // The WhatsApp number (we'll use the clinic number for now until a specific one is provided)
        // Format: country code without plus sign followed by the number
        const whatsappNumber = "919019968426"; 
        
        // Format the message content
        const waMessage = `*New Appointment Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Time:* ${time}%0A*Message:* ${message}`;
        
        // Construct the WhatsApp URL
        const waUrl = `https://wa.me/${whatsappNumber}?text=${waMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(waUrl, '_blank');
    });
}
