const {Favorite} = require("../utils/DB_connection");

const postFav = async (req, res) => {
    const {id, name, origin, status, image, species, gender} = req.body;

    if(name){
        try {
           const favorite = await Favorite.findOrCreate({
        where: {id, name, origin, status, image, species, gender},
        defaults: {id, name, origin, status, image, species, gender}
    });
    console.log(favorite);
    const allFavorites = await Favorite.findAll();
     res.status(200).json(allFavorites);

        } catch (error) {
         res.status(500).json({error: error.message});
        }
    }
    else res.status(404).json({error: 'Faltan datos'});

    
};

const deleteFav = async (req, res) => {
    const { id } = req.params;
   await Favorite.destroy({where:{id:id}})

   const myFavorites = await Favorite.findAll();
   

    return res.status(200).json(myFavorites);
};

module.exports = {
    postFav, deleteFav
}