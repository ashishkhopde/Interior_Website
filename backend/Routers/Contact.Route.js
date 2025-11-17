import { Router } from "express";
import { getContacts, createContact, getTotalMessages } from '../Controllers/Contact.Controller.js';

const router = Router();

router.get('/', getContacts);
router.post('/', createContact);
router.get('/total', getTotalMessages);

export default router;