import { Router } from "express";
import { getContacts, createContact } from '../Controllers/Contact.Controller.js';

const router = Router();

router.get('/', getContacts);
router.post('/', createContact);

export default router;