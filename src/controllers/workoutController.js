const workoutService = require("../services/workoutService");

const getAllworkouts = (req, res)=> {
    const AllWorkouts =  workoutService.getAllWorkouts();
    res.send("Get all workouts");
};

const getOneWorkout = (req, res) =>{
    const OneWorkout = workoutService.getAllWorkouts(req.params.workoutId);
    res.send(`Get One workout ${req.pararms.workoutId}`);
};

const createNewWorkout = (req, res) =>{
    const createdWorkout = workoutService.createNewWorkout(req.params.workoutId);
    res.send(`Create workout ${req.pararms.workoutId}`);
};

const updateOneWorkout = (req, res) =>{
    const updateWorkout = workoutService.updateOneWorkout(req.params.workoutId);
    res.send(`Update workout ${req.pararms.workoutId}`);
};

const deleteOneWorkout = (req, res) =>{
    const deleteOneWorkout = workoutService.deleteOneWorkout(req.params.workoutId);
    res.send(`Delete workout ${req.params.workoutId}`);
};

module.exports = {
    getAllworkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
}