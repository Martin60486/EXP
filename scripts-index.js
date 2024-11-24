// Load and Initialize Contact Section
function loadContactHTML() {
    const container = document.getElementById("contact-container");
    if (!container) return;

    if (window.innerWidth <= 767) {
        // Mobile View
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
            <div class="blog-link">
                <p>
                    <a href="./blog.html">Post your questions or comments and read answers on the blog</a>
                </p>
            </div>
        `;
    } else {
        // Desktop View
        container.innerHTML = `
            <div class="contact">
                <h2>Contact us</h2>
                <div class="contact-info">
                    <p>
                        Email: <a href="mailto:info@expaccounting.ca">info@expaccounting.ca</a><br>
                        Phone: 604-838-9028; 778-918-8898
                    </p>
                </div>
            </div>
        `;
    }
}

// Initialize Page Content
document.addEventListener("DOMContentLoaded", () => {
    loadContactHTML();
});
