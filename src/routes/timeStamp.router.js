import express from "express"
import {ReadFiles, WriteFile}  from "../controller/timeStamp.controller.js"

const router=express.Router()

router.get('/file', WriteFile)
router.get('/read', ReadFiles)

export default router