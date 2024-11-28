---
layout: default
title: Login
---

<link rel="stylesheet" href="./assets/css/styles-blog.css">

<div id="login-section">
  <h3>Login</h3>
  <form id="login-form">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <button type="submit">Login</button>
  </form>
</div>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script>
  const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZWp5Z3VqZm94YmlveXh3bmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MzIwMjcsImV4cCI6MjA0ODIwODAyN30.l14Ik580RCfmeW37Q6RjrNsjp-mFC91xIE0yg2JC7HI';
  const BASE_URL = 'https://fsejygujfoxbioyxwnex.supabase.co';

  // Supabase Initialization
  const asupabase = supabase.createClient(BASE_URL, API_KEY);

  document.getElementById('login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
      const { data: users, error } = await asupabase
        .from('tblusers')
        .select('*')
        .eq('name', username)
        .eq('pwd', password);

      if (error) throw error;

      if (users.length > 0) {
        localStorage.setItem('loggedIn', true); // Set logged-in state
        alert('Login successful!');
        window.location.href = './admin.html'; // Redirect to admin page
      } else {
        alert('Invalid username or password.');
      }
    } catch (err) {
      console.error('Login Error:', err.message, err.stack);
      alert('An error occurred during login. Please try again later.');
    }
  });
</script>