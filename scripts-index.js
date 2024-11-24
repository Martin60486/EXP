// Load and Initialize Contact Section
function loadContactHTML() {
    const container = document.getElementById("contact-container");

    if (window.innerWidth <= 767) {
        container.innerHTML = `
            <div class="contact">
                <div class="contact-header">
                    <img src="./assets/images/telephone.jpg" alt="Contact image" class="contact-image">                  
                    <h2>Contact us:</h2>
                </div>
                <div class="contact-info">
                    <p>
                        Email: <a href="mailto:info@expaccounting.ca" class="email-link">info@expaccounting.ca</a><br>
                        Phone: 604-838-9028; 778-918-8898<br>
                        Feel free to reach out via email or telephone for any inquiries!
                    </p>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="contact">
                <div class="contact-image-wrapper">
                    <img src="./assets/images/telephone.jpg" alt="Contact image" class="contact-image">    
                </div>
                <div class="contact-info">
                    <h2>Contact us:</h2>
                    <p>
                        Email: <a href="mailto:info@expaccounting.ca" class="email-link">info@expaccounting.ca</a><br>
                        Phone: 604-838-9028; 778-918-8898<br>
                        Feel free to reach out via email or telephone for any inquiries!
                    </p>
                </div>
            </div>
        `;
    }
}

window.addEventListener('load', loadContactHTML);
window.addEventListener('resize', loadContactHTML);