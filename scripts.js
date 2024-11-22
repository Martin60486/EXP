

function loadContactHTML() {
    const container = document.getElementById("contact-container");

    if (!container) {
        console.error("Contact container not found!");
        return;
    }

    // Dynamically adjust layout based on screen width without overwriting static content
    if (window.innerWidth <= 767) {
        container.querySelector(".contact").classList.add("mobile-layout");
        container.querySelector(".contact-image").classList.add("mobile-image");
    } else {
        container.querySelector(".contact").classList.remove("mobile-layout");
        container.querySelector(".contact-image").classList.remove("mobile-image");
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
