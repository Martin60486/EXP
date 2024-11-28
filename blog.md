---
layout: default
title: Blog
---
<link rel="stylesheet" href="./assets/css/styles-blog.css">
<a href="./index.html" style="font-weight: bold; color: purple; margin-right: 20px; text-align: left;">Home</a>
<h2>Ask us questions</h2>
<form id="question-form">
    <input type="text" id="name" name="name" placeholder="Your Name (optional)">
    <select id="category" name="category">
        <option value="">Select a category</option>
    </select>
    <textarea id="question" name="question" placeholder="Your question"></textarea>
    <button type="submit"><i class="fas fa-paper-plane"></i> Submit</button>
</form>

<section id="questions-container">
    <!-- Questions will be displayed dynamically -->
</section>

<nav style="text-align: center; margin-bottom: 20px;">
  <a href="./index.html" style="font-weight: bold; color: purple; margin-right: 20px;">Home</a>
  <a id="login-link" href="./login.html" style="font-weight: bold; color: #0056b3;">Admin Login</a>
</nav>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('login-link');
    const isLoggedIn = localStorage.getItem('loggedIn');

    if (isLoggedIn) {
      // Change link to "Admin Page" if logged in
      loginLink.textContent = 'Admin Page';
      loginLink.href = './admin.html';
    } else {
      // Default link to "Login Page"
      loginLink.textContent = 'Admin Login';
      loginLink.href = './login.html';
    }
  });
</script>

<!-- Include the Supabase Library -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>

<!-- Include Your Custom Script -->
<script src="./scripts-blog.js"></script>