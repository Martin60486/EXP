// Supabase Initialization
const SUPABASE_URL = 'https://fsejygujfoxbioyxwnex.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZWp5Z3VqZm94YmlveXh3bmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMzY2NTIsImV4cCI6MjA0NzcxMjY1Mn0.-OZArZquHFdPqC_aO5w4PWEmmXwWB0_4k5AqVEB8G6w'; // Replace with your actual Anon Key
const mySupabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Load Categories
async function loadCategories() {
    try {
        const { data: categories, error } = await mySupabase.from("categories").select("*");
        if (error) throw error;

        const categorySelect = document.getElementById("category");
        categorySelect.innerHTML = ""; // Clear existing options
        categories.forEach((category) => {
            const option = document.createElement("option");
            option.value = category.id;
            option.textContent = category.name;
            categorySelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error loading categories:", error);
    }
}

// Submit Question
async function submitQuestion(event) {
    event.preventDefault();

    const name = document.getElementById("name").value || "Anonymous";
    const category = document.getElementById("category").value;
    const question = document.getElementById("question").value;

    if (!category || !question) {
        alert("Please fill out the category and question fields.");
        return;
    }

    try {
        const { error } = await mySupabase
            .from("questions")
            .insert([{ name, category_id: category, question }]);
        if (error) throw error;

        alert("Question submitted successfully!");
        loadQuestions(); // Reload questions after submission
    } catch (error) {
        console.error("Error submitting question:", error);
        alert("Failed to submit question. Please try again.");
    }
}

// Load Questions
async function loadQuestions() {
    try {
        const { data: questions, error } = await mySupabase
            .from("questions")
            .select("*")
            .order("category_id", { ascending: true });
        if (error) throw error;

        const container = document.getElementById("questions-container");
        container.innerHTML = ""; // Clear old questions
        questions.forEach((q) => {
            const questionCard = document.createElement("div");
            questionCard.className = "question-card";
            questionCard.innerHTML = `<h3>Asked by ${q.name}: ${q.question}</h3><p>Answered by EXP: ${q.answer}</p>`;
            container.appendChild(questionCard);
        });
    } catch (error) {
        console.error("Error loading questions:", error);
    }
}

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
    loadCategories();
    loadQuestions();
});

document.getElementById("question-form").addEventListener("submit", submitQuestion);