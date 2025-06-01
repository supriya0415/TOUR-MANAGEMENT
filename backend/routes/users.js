import express from 'express'
import {
  updateUser,
  getAllUser,
  getSingleUser,
  deleteUser,
} from "../controllers/userController.js";
const router = express.Router();

import { verifyAdmin,verifyUser } from '../utils/verifyToken.js';

//update new user
router.put('/:id', verifyUser, updateUser);

// delete  user
router.delete('/:id',verifyUser, deleteUser);

// get Single  user
router.get("/:id", verifyUser, getSingleUser);

//  get All user
router.get("/", verifyAdmin, getAllUser);

export default router;