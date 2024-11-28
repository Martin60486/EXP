---
layout: default
title: Admin
---
<link rel="stylesheet" href="./assets/css/admin.css">

<nav>
  <a href="./index.html" class="nav-link">Home</a>
  <a href="./blog.html" class="nav-link">Blog</a>
  <button id="logout-btn" class="nav-button">Log Out</button>
</nav>
<div id="admin-section">
  <h3>Questions</h3>
  <table id="questions-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Question</th>
        <th>Answer</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script src="./scripts-admin.js"></script>

