---
layout: default
title: Admin
---

<h2>Admin Page</h2>
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

  <h3>Answer a Question</h3>
  <form id="answer-form">
    <label for="question-id">Question ID:</label>
    <input type="number" id="question-id" name="question-id" required>
    <br>
    <label for="answer">Answer:</label>
    <textarea id="answer" name="answer" required></textarea>
    <br>
    <button type="submit">Submit Answer</button>
  </form>
</div>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>

<script src="./scripts-admin.js"></script>

