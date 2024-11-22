---
layout: default
title: Blog
---

<h1>Blog</h1>

<form id="question-form">
    <label for="category">Category:</label>
    <select id="category" name="category">
        <!-- Categories will be dynamically loaded -->
    </select>

    <label for="question">Your Question:</label>
    <textarea id="question" name="question" required></textarea>

    <button type="submit">Submit</button>
</form>

<div id="questions-container">
    <!-- Questions and answers will be dynamically displayed here -->
</div>

<script>
    // Load categories and questions when the page loads
    document.addEventListener('DOMContentLoaded', function() {
        loadCategories();
        loadQuestions();
    });
</script>
