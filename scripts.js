

// Load and Initialize Contact Section
function loadContactHTML() {
    const container = document.getElementById("contact-container");
    if (!container) return;

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
            <div class="blog-link">
                <p>
                    <a href="./blog.html">Post your questions or comments and read answers on the blog</a>
                </p>
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
            <div class="blog-link">
                <p>
                    <a href="./blog.html">Post your questions or comments and read answers on the blog</a>
                </p>
            </div>
        `;
    }
}


// Supabase Integration
const SUPABASE_URL = "https://fsejygujfoxbioyxwnex.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZWp5Z3VqZm94YmlveXh3bmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMzY2NTIsImV4cCI6MjA0NzcxMjY1Mn0.-OZArZquHFdPqC_aO5w4PWEmmXwWB0_4k5AqVEB8G6w";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Load categories
async function loadCategories() {
    const { data: categories, error } = await supabase.from('categories').select('*');
    if (error) return console.error('Error fetching categories:', error);
    const categorySelect = document.getElementById('category');
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        categorySelect.appendChild(option);
    });
}

// Submit a question
async function submitQuestion(event) {
    event.preventDefault();
    const category = document.getElementById('category').value;
    const question = document.getElementById('question').value;
    const { error } = await supabase.from('questions').insert([{ category_id: category, question }]);
    if (error) return console.error('Error:', error);
    alert('Question submitted successfully!');
    loadQuestions();
}

// Load questions and answers
async function loadQuestions() {
    const { data: questions, error } = await supabase.from('questions').select('*').order('category_id', { ascending: true });
    if (error) return console.error('Error:', error);
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';
    questions.forEach(question => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p><strong>Category:</strong> ${question.category_id}</p>
            <p><strong>Question:</strong> ${question.question}</p>
            <p><strong>Answer:</strong> ${question.answer || 'Pending'}</p>`;
        questionsContainer.appendChild(questionDiv);
    });
}

// Attach listeners
document.addEventListener('DOMContentLoaded', function() {
    loadContactHTML();
    loadCategories();
    loadQuestions();
});
