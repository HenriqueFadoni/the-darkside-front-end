import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <div>
      <form className="login-page__form--fields">
        <input 
          className="login-page__form--inputs" 
          type="email" 
          placeholder="E-mail" 
          required
        />
        <input 
          className="login-page__form--inputs" 
          type="password" 
          placeholder="Password" 
          required
        />
        <button 
          className="login-page__form--submit-btn"
          type="submit"
        >
          LOGIN
        </button>
      </form>

      <p className="arciform body-text-2 text-white">
        Doesn't Have an Account?  
        <span className="text-purple margin-left-05">
          Create Here!
        </span>
      </p>
    </div>
  );
}

export default LoginForm;
