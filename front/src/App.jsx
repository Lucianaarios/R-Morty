import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route,  useLocation, useNavigate} from 'react-router-dom'
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';

const USER_EMAIL = 'hola@gmail.com';
const USER_PASSWORD = '123abc';


function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   const onSearch = async (id) => {
      try {
        const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

        if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } 
      } catch (error) {
         window.alert('¡No hay personajes con este ID!')
      }
      
   };



   function onClose(id){
      setCharacters(characters.filter((character) => character.id !== id ))
   }

   const login = async (userData) => {
         try {
            const { email, password } = userData;
            const URL = 'http://localhost:3001/rickandmorty/login/';
            const { data } = await axios(`${URL}?email=${email}&password=${password}`)
            const { access } = data;
            setAccess(data);
            access && navigate('/home');

         } catch (error) {
            throw Error(error.message)
         }
      };
   

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         { pathname !== '/' && <Nav onSearch={onSearch} />}
         
        <Routes>
         <Route path='/home' element={<Cards characters={characters} onClose = {onClose} />}/>
         <Route path='/about' element={<About/>} />
         <Route path='/detail/:id' element={<Detail/>} />
         <Route path='/' element={<Form login={login}/>}/>
         <Route path='/favorites' element={ <Favorites/> } />
        </Routes>
      </div>
   );
}

export default App;