import axios from 'axios';
import { useParams } from 'react-router-dom';
import React from 'react';

const Detail = () => {
    const params = useParams();

    const [character, setCharacter] = React.useState({});

    React.useEffect(() => {
axios(`http://localhost:3001/rickandmorty/character/${params?.id}`)
.then(({data}) => {
    if(data.name) {
        setCharacter(data);
    } else {
        window.alert('No hay personajes con ese ID')
    }
})
return setCharacter({});
 }, [params?.id])


    return(
        <div  className="detail-container">
            <h2>{character?.name}</h2>
            <p>{character?.status}</p>
            <p>{character?.species}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>
            <img src={character?.image} alt={character?.name} />
        </div>
    )
}

export default Detail;