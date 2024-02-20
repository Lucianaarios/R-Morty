import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = () => {
    
    const dispatch = useDispatch();
    const { myFavorites } = useSelector((state) => state);

    const handleChange = (event) => {
        if(event.target.name === 'filter') {
            dispatch(filterCards(event.target.value));
        } else {
           dispatch(orderCards(event.target.value)); 
        }
      
    };


   

    return(
        <div>
            <select name="order" onChange={handleChange}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
            </select>
            <select name="filter" onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            {myFavorites?.map((character, index) => {
                return(
                    <div key={index}>
                    <Card 
                    id={character.id}
                    name={character.id}
                    status={character.status}
                  origin={character.origin?.name}
                  gender={character.gender}
                  image={character.image}
                  species={character.species}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Favorites;