import React from 'react';
import './SignUp.css'

function SignUp() {
    return (
        <div className='register'>
            <div className='signup'>
                <h2>Sign Up</h2>
                <span>Register and begin your journey</span>

                <form id='form' className='flex flex-col'>
                    <input type='text' placeholder='Email' /> 
                    <input type='text' placeholder='Username' />
                    <input type='text' placeholder='Password' />
                    <input type='text' placeholder='Confirm Password' />
                    
                    <button className='btn'>Sign Up</button>
                    <button className='btn'>Log In</button>
                </form>
            </div>
           
        </div>
    );
};

export default SignUp;