// Define API Key and Base URL
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZWp5Z3VqZm94YmlveXh3bmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MzIwMjcsImV4cCI6MjA0ODIwODAyN30.l14Ik580RCfmeW37Q6RjrNsjp-mFC91xIE0yg2JC7HI';
const BASE_URL = 'https://fsejygujfoxbioyxwnex.supabase.co';

// Supabase Initialization
const asupabase = supabase.createClient(BASE_URL, API_KEY);

// Load Questions for Admin
async function loadQuestions() {
  try {
    const container = document.getElementById('questions-container');
    if (!container) {
      console.error('Error: questions-container not found.');
      return;
    }

    const { data: questions, error } = await asupabase
      .from('questions')
      .select('*')
      .order('id', { ascending: false });

    if (error) throw error;

    container.innerHTML = ''; // Clear old questions
    questions.forEach((q) => renderQuestionCard(q, container));
  } catch (error) {
    console.error('Error loading questions:', error.message, error.stack);
    alert('Failed to load questions. Please try again later.');
  }
}

// Render Question Card
function renderQuestionCard(q, container) {
  const questionCard = document.createElement('div');
  questionCard.className = 'question-card';
  questionCard.innerHTML = `
    <p><strong>Asked by:</strong> ${q.name || 'Anonymous'}</p>
    <h3 contenteditable="true" data-id="${q.id}" data-field="question">${q.question}</h3>
    <p><strong>Answered by EXP:</strong></p>
    <pre contenteditable="true" data-id="${q.id}" data-field="answer" style="white-space: pre-wrap;">${q.answer || ''}</pre>
    <div class="actions">
      <button class="save-btn" onclick="saveChanges(${q.id})">Save</button>
      <button class="delete-btn" onclick="deleteQuestion(${q.id})">Delete</button>
    </div>
  `;
  container.appendChild(questionCard);
}
// Save Changes
async function saveChanges(id) {
  const questionElement = document.querySelector(`[data-id="${id}"][data-field="question"]`);
  const answerElement = document.querySelector(`[data-id="${id}"][data-field="answer"]`);

  // Replace new lines with `<br>` for the answer field
  const updatedQuestion = questionElement.textContent.trim();
  const updatedAnswer = answerElement.innerHTML.trim(); // Save HTML content, including `<br>`

  if (!updatedQuestion || !updatedAnswer) {
    alert('Both the question and answer fields must be filled out.');
    return;
  }

  // Confirm with the user before proceeding
  const isConfirmed = confirm('Are you sure you want to save your changes?');
  if (!isConfirmed) {
    alert('Changes were not saved.');
    return; // Exit if the user does not confirm
  }

  try {
    const { error } = await asupabase
      .from('questions')
      .update({ question: updatedQuestion, answer: updatedAnswer })
      .eq('id', id);

    if (error) throw error;

    alert('Changes saved successfully!');
    loadQuestions();
  } catch (error) {
    console.error('Error saving changes:', error.message, error.stack);
    alert('Failed to save changes. Please try again.');
  }
}
// Delete Question
async function deleteQuestion(id) {
  if (!confirm('Are you sure you want to delete this question?')) return;
  if (!confirm('AGAIN, ARE YOU SURE YOU WANT TO DELETE THIS QUESTION?')) return;


  try {
    const { error } = await asupabase
      .from('questions')
      .delete()
      .eq('id', id);

    if (error) throw error;

    alert('Question deleted successfully!');
    loadQuestions();
  } catch (error) {
    console.error('Error deleting question:', error.message, error.stack);
    alert('Failed to delete the question. Please try again.');
  }
}

// Logout Functionality
document.getElementById('logout-btn')?.addEventListener('click', () => {
  localStorage.removeItem('loggedIn');
  alert('You have been logged out.');
  location.reload();
});

// Initialize Admin Page
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('admin.html')) {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (!isLoggedIn) {
      alert('Please log in first!');
      window.location.href = './login.html';
    } else {
      loadQuestions();
    }
  }
});