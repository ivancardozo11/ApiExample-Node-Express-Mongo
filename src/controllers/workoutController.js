const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res)=> {
    const allWorkouts =  workoutService.getAllWorkouts();
    res.send({status: 'OK', data: allWorkouts} );
};

const getOneWorkout = (req, res) =>{
    const workout = workoutService.getOneWorkout(req.params.workoutId);
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
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
}