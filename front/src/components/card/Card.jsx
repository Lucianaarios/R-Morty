import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { addFav, removeFav } from '../../redux/actions';
import { useLocation } from "react-router-dom";



 const Card = ({id, name, image, onClose, gender, status, species}) => {
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites);
   const { pathname } = useLocation();
   const [isFav, setIsFav] = useState(false);


   const handleFavorite = () => {
      const character = {id, name, status, species, gender, origin, image, onClose};
      if(isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav(character));
      }
   }

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className='card' >
         {
         isFav ? (
           <button className="favorite-button" onClick={handleFavorite}>❤️</button>
            ) : (
          <button className="favorite-button" onClick={handleFavorite}>🤍</button>
             )
          }
          {
            pathname !== '/favorites'
            ? <button className="remove-button" onClick={() => onClose(id)}>X</button>
            : ''
          }
          
          <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
          </Link>  
         <p>{gender}</p>
         <img src={image} alt='name' /> 
      </div>
   );
}

export default Card;