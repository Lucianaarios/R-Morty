import Card from '../card/Card';


const Cards = ({characters, onClose}) => {
   return(
       <div >
         {characters.map(({ id, name, image, gender, status, species }) => {
            return <Card
            key={id}
            id={id}
            name={name}
            image={image}
            onClose={onClose}
            gender={gender}
            species={species}
            status={status}
            />
         })} 
       </div>
   ) 
}
 
export default Cards;