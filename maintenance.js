// Maintenance Mode Logic
// This script runs early in the <head> to prevent the rest of the page from loading if maintenance mode is ON.
if (typeof CONFIG !== 'undefined' && CONFIG.MAINTENANCE_MODE) {
    // Stop the browser from parsing the rest of the HTML document
    if (window.stop) {
        window.stop();
    }

    // Replace the entire HTML content with the maintenance page
    document.documentElement.innerHTML = `
        <head>
            <title>Site Under Maintenance - Vedic Speech Therapy and Hearing Care Clinic</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <style>
                :root {
                    --primary-color: #2C7873;
                    --primary-light: #4A9C96;
                    --secondary-color: #52B2BF;
                    --accent-color: #FF7F50;
                    --text-color: #333333;
                    --background-color: #F8FBFB;
                    --white: #FFFFFF;
                }
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: var(--background-color);
                    color: var(--text-color);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    text-align: center;
                    padding: 20px;
                }
                .maintenance-container {
                    background: var(--white);
                    padding: 50px 40px;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    max-width: 600px;
                    width: 100%;
                }
                .maintenance-icon {
                    font-size: 4.5rem;
                    color: var(--primary-color);
                    margin-bottom: 25px;
                    animation: float 3s ease-in-out infinite;
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                h1 {
                    color: var(--primary-color);
                    font-size: 2.2rem;
                    margin-bottom: 15px;
                }
                p {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    color: #555;
                    margin-bottom: 30px;
                }
                .contact-info {
                    background: #f1f8f8;
                    padding: 25px;
                    border-radius: 8px;
                    margin-top: 20px;
                }
                .contact-info p {
                    margin-bottom: 10px;
                    font-size: 1.05rem;
                }
                .contact-info p:last-child {
                    margin-bottom: 0;
                }
                .contact-info i {
                    color: var(--primary-color);
                    margin-right: 10px;
                    width: 20px;
                }
                .contact-info a {
                    color: var(--primary-color);
                    text-decoration: none;
                    font-weight: 600;
                    transition: color 0.3s;
                }
                .contact-info a:hover {
                    color: var(--primary-light);
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <div class="maintenance-container">
                <i class="fas fa-tools maintenance-icon"></i>
                <h1>We'll be back soon!</h1>
                <p>We are currently performing some scheduled maintenance to improve our services. Our website will be back online shortly. Thank you for your patience.</p>
                
                <div class="contact-info">
                    <h3 style="margin-bottom: 20px; color: var(--primary-color); font-size: 1.3rem;">Need to reach us urgently?</h3>
                    <p><i class="fas fa-phone"></i> <a href="tel:+919916049099">+91 9916049099</a></p>
                    <p><i class="fas fa-envelope"></i> <a href="mailto:vedicspeechandhearingclinic@gmail.com">vedicspeechandhearingclinic@gmail.com</a></p>
                </div>
            </div>
        </body>
    `;
}
