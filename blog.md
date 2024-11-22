---
layout: default
title: Blog
---

<h1>Blog</h1>

<form id="question-form">
    <label for="name">Your Name:</label>
    <input type="text" id="name" name="name" placeholder="anonymous">

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

    function loadCategories() {
        // Mock categories for now; replace with an API or database call
        const categories = [
            { id: 1, name: "Individual Tax" },
            { id: 2, name: "Corporate and Trust Tax" },
            { id: 3, name: "Bookkeeping and Payroll" },
            { id: 4, name: "Non-Resident Tax" },
            { id: 5, name: "Not-for-Profit Accounting" },
            { id: 6, name: "Others" }
        ];

        const categorySelect = document.getElementById("category");
        categories.forEach(category => {
            const option = document.createElement("option");
            option.value = category.id;
            option.textContent = category.name;
            categorySelect.appendChild(option);
        });
    }

    function loadQuestions() {
        // Function to dynamically load existing questions (if any)
    }
</script>