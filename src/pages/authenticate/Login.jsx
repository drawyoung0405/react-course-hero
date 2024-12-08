import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = React.useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    const bodyData = {
      data: {
        "email": form.email,
        "password": form.password
      }
    }

    try {
      const response = await fetch('https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      });
      const json = await response.json();
      if(json.isSucess) {
        const access_token = json.data.access_token;
        window.sessionStorage.setItem('access_token', access_token);
        navigate('/authenticate/account');
      }
    } catch (err) {
      console.log('error: ', err)
    }

  }

  function onChange(e) {
    const { value, name } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        Email: 
        <input 
          name="email" 
          value={form.email} 
          onChange={onChange} 
          type="text" 
        /> 
        <br />

        Password: 
        <input 
          name="password" 
          value={form.password} 
          onChange={onChange} 
          type="password" 
        /> 

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login