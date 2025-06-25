import React from 'react';

const LoginForm = () => {
  const handleLogin=(event) => {
    event.preventDefault();
    console.log("Login form submitted");
  }

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;