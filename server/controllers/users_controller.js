//STEP 1 MICHAEL 

module.exports = {
    register: ( req, res, next ) => {
      const db = req.app.get('db');
      const { params, query } = req; 

      db.add_inventory([params.id, params.name, params.price, query.desc])   
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    }
  };