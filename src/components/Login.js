import React from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import { useHistory } from "react-router";

const initialValues = {username: 'Lambda', password: 'School'}

const Login = () => {
  
  const Login = () => {

    const {push} = useHistory();

    const [formValues, setFormValues] = useState(initialValues);
    const [error, setError] = useState();

    const handleChange = (event) => {
      setFormValues({...formValues, [event.target.name]: event.target.value})
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(formValues.username !== 'Lambda' || formValues.password !== 'School') {
      setError('Username or Password not valid')
    }
    axiosWithAuth()
      .post('api/login', formValues)
      .then(res => {
        console.log('Axios Post', res)
        localStorage.setItem('token', res.data.payload)
        push('/bubblepage')
      })
      .catch(error => {
        console.log('Handle Submit Error', error)
      })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form>
          <label> Username 
            <input id='username' data-testid='username' name='username' value={formValues.username} onChange={handleChange} />
          </label>
          <label>Password
            <input id='password' data-testid='password' name='password' type='password' value={formValues.password} onChange={handleChange} />
          </label>
          <button id='submit'>Login</button>
        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"