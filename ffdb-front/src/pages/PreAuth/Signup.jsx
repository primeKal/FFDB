// SignUp.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function SignUp() {
 const { register, handleSubmit, formState: { errors } } = useForm();
 const navigate = useNavigate();

 const onSubmit = (data) => {
    // Here you would typically send the data to your backend for registration
    console.log(data);
    // Redirect to login page after successful registration
    navigate('/login');
 };

 return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name", { required: true })} placeholder="Name" />
        {errors.name && <span style={{ color: "red" }}>Name is required</span>}

        <input type="email" {...register("email", { required: true })} placeholder="Email" />
        {errors.email && <span style={{ color: "red" }}>Email is required</span>}

        <input type="password" {...register("password", { required: true })} placeholder="Password" />
        {errors.password && <span style={{ color: "red" }}>Password is required</span>}

        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
 );
}

export default SignUp;
