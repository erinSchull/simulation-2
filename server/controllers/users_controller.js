//STEP 1 MICHAEL 

module.exports = {
    register: ( req, res, next ) => {
      const db = req.app.get('db');
      const { username, password } = req.body; 

         db.create_user([username, password])   
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send('username invalid') );
    }
  };

//   update: ( req, res, next ) => {
//     const dbInstance = req.app.get('db');
//     const { params, query } = req;

//     dbInstance.update_product([ params.id, query.desc ])
//       .then( () => res.status(200).send() )
//       .catch( () => res.status(500).send() );
//   },