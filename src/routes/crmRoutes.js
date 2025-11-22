import { addNewContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        console.log(`Request come from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, (req, res, next) => {  
        res.send("You are on contact route, Congratulations!")
    })
    
    .post(addNewContact);

    app.route('/contact/:contactId')
    .put((req, res) => 
        res.send("You are on put method")
    )

    .delete((req, res) => 
        res.send("Item deleted successfully")
    )
}

export default routes;