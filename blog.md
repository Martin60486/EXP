---
layout: default
title: Blog
---
<link rel="stylesheet" href="./assets/css/styles-blog.css">

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
  <a href="./login.html" id="login-link" style="font-weight: bold; color: #0056b3;">Admin Login</a>
</nav>
 
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('login-link');
    //check if the user is logged in
    if (localStorage.getItem('loggedIn')) {
        loginLink.textContent = 'Go to admin page';
        loginLink.href = './admin.html';
      //const adminLink = document.createElement('a');
      //adminLink.href = './admin.html';
      //adminLink.textContent = 'Go to Admin Page';
      //adminLink.style.fontWeight = 'bold';
      //adminLink.style.float = 'right';

      // Append the link to the body or a specific container
      //document.body.appendChild(adminLink);
    }
  });
</script>
<!-- Include the Supabase Library -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>

<!-- Include Your Custom Script -->
<script src="./scripts-blog.js"></script>
