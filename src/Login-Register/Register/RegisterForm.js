import React from 'react';

const RegisterForm = () => {
  const handleLogin=(e) => {
    e.preventDefault();
    console.log("Registered successfully");
  }

  return (
    <form onSubmit={handleLogin}>
      <input id="username" type="text" placeholder="Username" required />
      <input type="text" id="firstname"  placeholder="First Name" required />
      <input type="text" id="lastname" placeholder="Last Name" required />
      <input type="text" id = "number" placeholder="Phone Number" required />
      <input type="email" id='email'  placeholder="Email" required />
      <input type="password" id='pwd' placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;