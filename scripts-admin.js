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
        .select('*');
  
      if (error) {
        throw new Error(error.message);
      }
  
      const tableBody = document.querySelector('#questions-table tbody');
      if (tableBody) {
        tableBody.innerHTML = questions.map(q => `
          <tr>
            <td>${q.id}</td>
            <td>${q.question}</td>
            <td>${q.answer || 'No answer yet'}</td>
            <td>
              <button onclick="deleteQuestion(${q.id})">Delete</button>
            </td>
          </tr>
        `).join('');
      } else {
        console.warn('Questions table not found in the DOM.');
      }
  
      document.getElementById('answer-form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = document.getElementById('question-id').value;
        const answer = document.getElementById('answer').value;
  
        try {
          await asupabase
            .from('questions')
            .update({ answer })
            .eq('id', id);
  
          alert('Answer submitted');
          location.reload();
        } catch (err) {
          console.error('Answer Submission Error:', err);
          alert('Failed to submit the answer. Please try again later.');
        }
      });
    } catch (err) {
      console.error('Admin Error:', err);
      alert('An error occurred while loading questions. Please try again later.');
    }
  });
  
  // Delete question functionality
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