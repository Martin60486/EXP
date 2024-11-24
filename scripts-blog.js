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

        categories.forEach((category_row) => {  //"Each" in the dataset categories is a datarow 
            const option = document.createElement("option"); //create an option element, but not ById
            option.value = category_row.id; // Use category ID as the value=>option.value is integer
            option.textContent = category_row.name; // Display category name
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

    const category_int = document.getElementById("category").value;
    const question_txt = document.getElementById("question").value;
//getElementById(...) return html element <select> and <textArea>, with value as integer and text respectively
//see blog.md:<select id="category" name="category"></select> and <textarea id="question" name="question" required></textarea>
//categorySelect's value is the currently selected <option> element's value; textarea question's value is whan is entered
    if (!category_int || !question_txt) {
        alert("Category and question are required.");
        return;
    }

    try {
        const { error } = await mySupabase.from("questions").insert([{ category_id: category_int, question: question_txt }]);
        //insert into fields category_id and question
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

// Initialize Page Content
document.addEventListener("DOMContentLoaded", () => {
    loadCategories();
    loadQuestions();
});
