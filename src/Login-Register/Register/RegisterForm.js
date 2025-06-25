import React from 'react';

const RegisterForm = () => {
  const handleLogin=(e) => {
    e.preventDefault();
    console.log("Registered successfully");
  }

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Username" required />
      <input type="text" placeholder="First Name" required />
      <input type="text" placeholder="Last Name" required />
      <input type="text" placeholder="Phone Number" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;