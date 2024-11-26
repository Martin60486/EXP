---
layout: default
title: Login
---

<h2>Login</h2>
<form id="login-form">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" autocomplete="off" required>
  <br>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" autocomplete="new-password" required>
  <br>
  <button type="submit">Login</button>
</form>

<p id="login-message"></p>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script src="./scripts-admin.js"></script>
