import AuthContext from '../../Context/auth-Context';
import classes from './ProfileForm.module.css';
import { useContext, useRef } from 'react';
import {useHistory} from 'react-router-dom';

const ProfileForm = () => {

  const newPasswordRef = useRef()

  const history = useHistory()

  const ctx = useContext(AuthContext)

  const submitHandler = (event) => {

    event.preventDefault()
    const enteredNewPassword = newPasswordRef.current.value;

    fetch (
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDQrmC1vNM9oGEiMumJCX2hCvhUxLJg9qs',
      {
        method : 'POST',
        body : JSON.stringify({
            idToken : ctx.token,
            password : enteredNewPassword,
            returnSecureToken : true,
        }),
        headers : {
          'Content-Type' : 'application/JSON'
        }
      }
    ).then(res => {

      if(res.ok){
          console.log(res)
          history.replace('/')
      }
      else{

        return JSON.stringify().then(data => {
          let errorMessage = 'Access denied'
          alert(errorMessage)
        })

      }
    })

  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={newPasswordRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
