// Supabase Initialization
const SUPABASE_URL = 'https://fsejygujfoxbioyxwnex.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZWp5Z3VqZm94YmlveXh3bmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MzIwMjcsImV4cCI6MjA0ODIwODAyN30.l14Ik580RCfmeW37Q6RjrNsjp-mFC91xIE0yg2JC7HI'; // Replace with your actual Anon Key
const mySupabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
// Load Categories
async function loadCategories() {
    try {
        const { data: categories, error } = await mySupabase
            .from("categories")
            .select("*")
            .order("id", { ascending: true });
        if (error) throw error;

        const categorySelect = document.getElementById("category");
        categorySelect.innerHTML = "";
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Select a category";
        defaultOption.selected = true;
        defaultOption.disabled = true;
        categorySelect.appendChild(defaultOption);
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

// Apply collapsible functionality
function applyCollapsibleFunctionality() {
    const questionCards = document.querySelectorAll(".question-card");
    questionCards.forEach((card) => {
        card.addEventListener("click", () => {
            const answer = card.querySelector(".answer-text"); // Locate the answer within the card
            if (answer.style.display === "none" || !answer.style.display) {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }
        });
    });
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
        
            // Ensure all answer lines are wrapped in <div> tags
            const formattedAnswer = q.answer
                .split("\n")
                .map((line) => `<div>${line}</div>`)
                .join("");
        
            questionCard.innerHTML = `
                <p>Asked by ${q.name}:</p> 
                <h3 style="cursor: pointer;" class="question-header">${q.question}</h3>
                <div class="answer-text" style="display: none;">
                    <p>Answered by EXP:</p>
                    ${formattedAnswer}
                </div>
            `;
            container.appendChild(questionCard);
        });

        // Reapply collapsible functionality after loading questions
        applyCollapsibleFunctionality();
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
