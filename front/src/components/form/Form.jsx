import { useState, useEffect } from 'react';
import validation from './validation';


const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
       
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });

        
    };

    const handleSubmit = (event) => {
       event.preventDefault();
       login(userData);
    }

    useEffect(() => {
        if(userData.email !== '' || userData.password !== ''){
const userValidated = validation(userData);
        setErrors(userValidated);      
        }

    }, [userData])



    return(
        <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input 
          type="email"
          name='email' 
          value={userData.email}
          onChange={handleChange}
          />
        
          {errors.email && <p style={{ color: 'red' }} >{errors.email}</p>}

          <hr style={{ borderStyle: "none" }}/>          

          <label htmlFor="password">Password: </label>
          <input 
          type="password" 
          name='password' 
          value={userData.password}
          onChange={handleChange}
          />
         {errors.password && <p style={{ color: 'red' }} >{errors.password}</p>}
          
           <hr style={{ borderStyle: "none" }}/>
          <button type="submit">Submit</button>
        </form> 
        </div>
    )
}

export default Form;