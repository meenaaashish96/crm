import { addNewContact, getContact, getContactWithID } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        console.log(`Request come from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContact)
    
    //post a new contact
    .post(addNewContact);

    //update contact by id
    app.route('/contact/:contactId')
    .put((req, res) => 
        res.send("You are on put method")
    )
    //get contact by id
    .get(getContactWithID)

    //Delete contact
    .delete((req, res) => 
        res.send("Item deleted successfully")
    )
}

export default routes;