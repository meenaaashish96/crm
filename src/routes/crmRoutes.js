import { addNewContact, getContact, getContactWithID,updateContact, deleteContacWithID } from "../controllers/crmController";

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
    .put(updateContact)
    //get contact by id
    .get(getContactWithID)

    //Delete contact
    .delete(deleteContacWithID)
}

export default routes;