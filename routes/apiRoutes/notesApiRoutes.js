const router = require('express').Router();

router.get('/api/notes', (req, res) => {

    // should read the db.json file and return all saved notes as JSON.

});
  
router.post('/api/notes', (req, res) => {
    
    // Should receive a new note to save on the request body, add it to the db.json file, 
    // and then return the new note to the client. 
    // You'll need to find a way to give each note a unique id when it's saved 
    // (look into npm packages that could do this for you).

});

module.exports = router;