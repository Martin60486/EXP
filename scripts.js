// Supabase initialization
const supabaseUrl = 'https://fsejygujfoxbioyxwnex.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZWp5Z3VqZm94YmlveXh3bmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMzY2NTIsImV4cCI6MjA0NzcxMjY1Mn0.-OZArZquHFdPqC_aO5w4PWEmmXwWB0_4k5AqVEB8G6w'; // Replace with your Supabase Key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Ensure DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
    // Load categories and questions when the page loads
    loadCategories();
    loadQuestions();

    // Attach event listener to the form
    document.getElementById("question-form").addEventListener("submit", handleFormSubmit);
});

// Handle form submission
async function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value || "anonymous";
    const category = document.getElementById("category").value;
    const question = document.getElementById("question").value;

    try {
        const { data, error } = await supabase
            .from('questions')
            .insert([
                { name, category_id: parseInt(category), question }
            ]);

        if (error) {
            console.error("Error inserting question:", error.message);
        } else {
            console.log("Question added:", data);
            loadQuestions(); // Refresh the questions list
        }
    } catch (err) {
        console.error("Unexpected error:", err.message);
    }

    // Clear the form
    document.getElementById("question-form").reset();
}

// Load categories into the dropdown menu
async function loadCategories() {
    const categories = [
        { id: 1, name: "Individual Tax" },
        { id: 2, name: "Corporate and Trust Tax" },
        { id: 3, name: "Bookkeeping and Payroll" },
        { id: 4, name: "Non-Resident Tax" },
        { id: 5, name: "Not-for-Profit Accounting" },
        { id: 6, name: "Others" }
    ];

    const categorySelect = document.getElementById("category");
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = category.name;
        categorySelect.appendChild(option);
    });
}

// Load questions and display them in the container
async function loadQuestions() {
    try {
        const { data, error } = await supabase
            .from('questions')
            .select('*')
            .order('category_id', { ascending: true });

        if (error) {
            console.error("Error loading questions:", error.message);
            return;
        }

        const questionsContainer = document.getElementById("questions-container");
        questionsContainer.innerHTML = ""; // Clear existing content

        data.forEach(question => {
            const questionElement = document.createElement("div");
            questionElement.innerHTML = `
                <p><strong>Category:</strong> ${question.category_id}</p>
                <p><strong>Name:</strong> ${question.name}</p>
                <p><strong>Question:</strong> ${question.question}</p>
                <p><strong>Answer:</strong> ${question.answer || "No answer yet"}</p>
            `;
            questionsContainer.appendChild(questionElement);
        });
    } catch (err) {
        console.error("Unexpected error:", err.message);
    }
}