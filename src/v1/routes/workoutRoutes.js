const express =  require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");

router
.get('/', workoutController.getAllworkouts)
.get("/:workoutId", workoutController.getOneWorkout)
.post("/:workoutId", workoutController.createNewWorkout)
.patch("/:workoutId", workoutController.updateOneWorkout)
.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;