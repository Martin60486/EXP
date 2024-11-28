---
layout: default
title: Login
---

<h2>Login</h2>
<form id="login-form" styles="width: 80%; padding: 20px;">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" autocomplete="off" required style="font-weight: bold; color: purple; margin: 10px 0; height: 30px;">
  <br>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" autocomplete="new-password" required style="font-weight: bold; color: purple; margin: 10px 0; height: 30px;">
  <br>
  <button type="submit">Login</button>
</form>

<p id="login-message"></p>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script src="./scripts-admin.js"></script>
