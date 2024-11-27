// Define API Key and Base URL
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZWp5Z3VqZm94YmlveXh3bmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MzIwMjcsImV4cCI6MjA0ODIwODAyN30.l14Ik580RCfmeW37Q6RjrNsjp-mFC91xIE0yg2JC7HI';
const BASE_URL = 'https://fsejygujfoxbioyxwnex.supabase.co';
const asupabase = supabase.createClient(BASE_URL, API_KEY);

// Login functionality
document.getElementById('login-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const { data: users, error } = await asupabase
      .from('tblusers')
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    const user = users.find(u => u.name === username && u.pwd === password);

    if (user) {
      localStorage.setItem('loggedIn', true);
      window.location.href = '/admin.html';
    } else {
      document.getElementById('login-message').textContent = 'Invalid username or password';
    }
  } catch (err) {
    console.error('Login Error:', err);
    document.getElementById('login-message').textContent = 'An error occurred during login. Please try again later.';
  }
});

// Admin functionality
document.addEventListener('DOMContentLoaded', async () => {
  if (!window.location.pathname.includes('admin.html')) return;

  try {
    const { data: questions, error } = await asupabase
      .from('questions')
      .select('*, categories(name)')
      .order('id', { ascending: true });

    if (error) {
      throw new Error(error.message);
    }

    const tableBody = document.querySelector('#questions-table tbody');
    if (tableBody) {
      tableBody.innerHTML = questions.map(q => `
        <tr>
          <td>${q.id}</td>
          <td>${q.question}</td>
          <td>${q.categories?.name || 'Uncategorized'}</td>
          <td>${q.answer || 'No answer yet'}</td>
          <td>
            <button onclick="selectQuestion(${q.id}, '${q.question.replace(/'/g, "\\'")}', '${(q.answer || '').replace(/'/g, "\\'")}')">Edit</button>
            <button onclick="deleteQuestion(${q.id})">Delete</button>
          </td>
        </tr>
      `).join('');
    }

    document.getElementById('answer-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = document.getElementById('question-id').value;
      const updatedQuestion = document.getElementById('question').value;
      const updatedAnswer = document.getElementById('answer').value;

      try {
        await asupabase
          .from('questions')
          .update({ question: updatedQuestion, answer: updatedAnswer })
          .eq('id', id);

        alert('Changes saved successfully');
        location.reload();
      } catch (err) {
        console.error('Save Error:', err);
        alert('Failed to save changes. Please try again later.');
      }
    });
  } catch (err) {
    console.error('Admin Error:', err);
    alert('An error occurred while loading questions. Please try again later.');
  }
});

// Function to populate form with selected question and answer
function selectQuestion(id, question, answer) {
  document.getElementById('question-id').value = id;
  document.getElementById('question').value = question;
  document.getElementById('answer').value = answer;
}

// Function to delete a question
async function deleteQuestion(id) {
  try {
    await asupabase
      .from('questions')
      .delete()
      .eq('id', id);

    alert('Question deleted');
    location.reload();
  } catch (err) {
    console.error('Delete Error:', err);
    alert('Failed to delete the question. Please try again later.');
  }
}