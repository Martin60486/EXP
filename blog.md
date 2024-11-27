---
layout: default
title: Blog
---
<link rel="stylesheet" href="./assets/css/styles-blog.css">
<a href="./login.html">Admin Login</a>

<h2>Submit Your Questions</h2>
<form id="question-form">
    <input type="text" id="name" name="name" placeholder="Your Name (optional)">
    <select id="category" name="category">
        <option value="">Select a Category</option>
    </select>
    <textarea id="question" name="question" placeholder="Your Question"></textarea>
    <button type="submit"><i class="fas fa-paper-plane"></i> Submit</button>
</form>

<section id="questions-container">
    <!-- Questions will be displayed dynamically -->
</section>
<script>
  if (localStorage.getItem('loggedIn')) {
    document.write('<a href="./admin.html" style="font-weight:bold;">Go to Admin Page</a>');
  }
</script>
<!-- Include the Supabase Library -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>

<!-- Include Your Custom Script -->
<script src="./scripts-blog.js"></script>
