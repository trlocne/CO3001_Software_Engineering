import React from 'react';
import classes from './style.module.css';

export const Signup = () => {
  return (
    <div className={classess.boxSignin}>
      <div className={classes.signinContainer}>
        <h1>Signin</h1>
        <form className={classes.signinForm}>
          <div className={classes.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className={classes.submitButton}>Sign In</button>
        </form>
      </div>
    </div>
    
  );
};
