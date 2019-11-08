import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <div>
      <form>
        <input type="email" placeholder="E-mail" required/>
        <input type="password" placeholder="Password" required/>
        <button type="submit">LOGIN</button>
      </form>
      <p className="arciform body-text-2">Doesn't Have an Account? <span>Create Here!</span></p>
    </div>
  );
}

export default LoginForm;
