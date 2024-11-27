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
        <th>Category</th>
        <th>Answer</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <h3>Edit Question and Answer</h3>
  <form id="answer-form">
    <label for="question-id">Question ID:</label>
    <input type="number" id="question-id" name="question-id" readonly>
    <br>
    <label for="question">Question:</label>
    <textarea id="question" name="question" rows="4" required></textarea>
    <br>
    <label for="answer">Answer:</label>
    <textarea id="answer" name="answer" rows="4" required></textarea>
    <br>
    <button type="submit">Save Changes</button>
  </form>
</div>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script src="./scripts-admin.js"></script>

