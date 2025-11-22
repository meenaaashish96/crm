import mongoose from "mongoose";
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);
  
  newContact.save()
  .then(contact => res.json(contact))
  .catch(err => res.status(400).send(err));

}

export const getContact = (req, res) => {
  Contact.find()
  .then(contacts => res.json(contacts))
  .catch(err => res.status(400).send(err));
}

