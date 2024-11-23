// Supabase Initialization
const SUPABASE_URL = 'https://fsejygujfoxbioyxwnex.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZWp5Z3VqZm94YmlveXh3bmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMzY2NTIsImV4cCI6MjA0NzcxMjY1Mn0.-OZArZquHFdPqC_aO5w4PWEmmXwWB0_4k5AqVEB8G6w'; // Replace with your actual Anon Key
const mySupabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
console.log("Supabase initialized:", mySupabase);

// Load Categories into the Select Dropdown
async function loadCategories() {
    try {
        // Fetch categories from Supabase
        const { data: categories, error } = await mySupabase.from("categories").select("*");

        if (error) {
            console.error("Error fetching categories:", error);
            alert("Failed to load categories. Please check your database permissions.");
            return;
        }

        if (!categories || categories.length === 0) {
            console.warn("No categories found in the database.");
            alert("No categories available to display. Please add categories to the database.");
            return;
        }

        console.log("Fetched categories:", categories);

        // Populate the dropdown menu
        const categorySelect = document.getElementById("category");
        categorySelect.innerHTML = ""; // Clear existing options

        categories.forEach((category) => {
            const option = document.createElement("option");
            option.value = category.id; // Use category ID as the value
            option.textContent = category.name; // Display category name
            categorySelect.appendChild(option);
        });
    } catch (error) {
        console.error("Unexpected error in loadCategories:", error);
        alert("An unexpected error occurred. Please try again.");
    }
}

// Handle Question Submission
async function submitQuestion(event) {
    event.preventDefault();

    const category = document.getElementById("category").value;
    const question = document.getElementById("question").value;

    if (!category || !question) {
        alert("Category and question are required.");
        return;
    }

    try {
        const { error } = await mySupabase.from("questions").insert([{ category_id: category, question }]);
        if (error) throw error;

        alert("Question submitted successfully!");
        loadQuestions(); // Reload questions after submission
    } catch (error) {
        console.error("Error submitting question:", error);
        alert("Failed to submit question. Please try again later.");
    }
}

// Load Questions and Display Them
async function loadQuestions() {
    try {
        const { data: questions, error } = await mySupabase
            .from("questions")
            .select("*")
            .order("category_id", { ascending: true });

        if (error) throw error;

        const questionsContainer = document.getElementById("questions-container");
        questionsContainer.innerHTML = ""; // Clear existing questions

        questions.forEach((question) => {
            const questionDiv = document.createElement("div");
            questionDiv.textContent = `${question.category_id}: ${question.question}`;
            questionsContainer.appendChild(questionDiv);
        });
    } catch (error) {
        console.error("Error loading questions:", error);
        alert("Failed to load questions. Please try again later.");
    }
}

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
    loadCategories();
    loadQuestions();
    loadContactHTML();
});
