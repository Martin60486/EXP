---
layout: default
title: Blog
---

<h1>Submit Your Questions</h1>

<form id="question-form">
    <label for="name">Name (optional):</label>
    <input type="text" id="name" name="name" placeholder="anonymous">

    <label for="category">Category:</label>
    <select id="category" name="category">
        <!-- Categories will be dynamically loaded -->
    </select>

    <label for="question">Your Question:</label>
    <textarea id="question" name="question" required></textarea>

    <button type="submit">Submit</button>
</form>

<h2>Questions and Answers</h2>
<div id="questions-container">
    <!-- Questions and answers will be dynamically displayed here -->
</div>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script src="/scripts.js"></script>