import mongoose from "mongoose";
import { ContactSchema } from '../models/crmModel';
import { response } from "express";

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

export const getContactWithID = (req, res) => {
  Contact.findById(req.params.contactId)
  .then(contact => res.json(contact))
  .catch(err => res.send(err));
}

