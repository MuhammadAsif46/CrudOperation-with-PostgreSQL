import { Router } from "express";
import {
  getAllPost,
  getPostById,
  createPost,
  UpdatePost,
  DeletePost,
} from "../controllers/index.js";

const router = Router();

// Secure routes:
// Get All Posts || GET
router.route("/posts").get(getAllPost);

// Get Post BY Id || GET
router.route("/posts/:postId"). get(getPostById);

// CREATE Post || POST
router.route("/create").post(createPost);

// Update Post BY Id || PUT
router.route("/updatePost/:postId").put(UpdatePost);

// DELETE Post BY Id || DELETE
router.route("/deletePost/:postId").delete(DeletePost);

export default router;