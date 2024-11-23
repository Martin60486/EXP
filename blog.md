---
layout: default
---

<h1>Submit Your Questions</h1>
<form id="question-form" onsubmit="submitQuestion(event)">
    <label for="name">Name (optional):</label>
    <input type="text" id="name" name="name" placeholder="anonymous">

    <label for="category">Category:</label>
    <select id="category" name="category"></select>

    <label for="question">Your Question:</label>
    <textarea id="question" name="question" required></textarea>

    <button type="submit">Submit</button>
</form>

<h2>Questions and Answers</h2>
<div id="questions-container"></div>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script src="./scripts.js"></script>
