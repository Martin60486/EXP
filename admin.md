---
layout: default
title: Admin
---
<link rel="stylesheet" href="./assets/css/admin.css">
<h2>Admin Page</h2>
<nav>
  <a href="./index.html">Home</a> | <a href="./blog.html">Blog</a>
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

