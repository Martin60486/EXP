---
layout: default
title: Admin
---

<link rel="stylesheet" href="./assets/css/styles-blog.css">

<nav class="nav-container">
  <a href="./index.html" class="nav-link">Home</a>
  <a href="./blog.html" class="nav-link">Blog</a>
  <button id="logout-btn" class="nav-button">Log Out</button>
</nav>

<div id="admin-section">
  <section id="questions-container">
    <!-- Questions will be dynamically populated here -->
  </section>
</div>
<nav class="nav-container">
  <a href="./index.html" class="nav-link">Home</a>
  <a href="./blog.html" class="nav-link">Blog</a>
  <button id="logout-btn" class="nav-button">Log Out</button>
</nav>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script src="./scripts-admin.js"></script>