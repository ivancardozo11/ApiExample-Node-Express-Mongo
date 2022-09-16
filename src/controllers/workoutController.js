const getAllworkouts = (req, res)=> {
    res.send("Get all workouts");
};

const getOneWorkout = (req, res) =>{
    res.send(`Get One workout ${req.pararms.workoutId}`);
};

const createNewWorkout = (req, res) =>{
    res.send(`Create workout ${req.pararms.workoutId}`);
};

const updateOneWorkout = (req, res) =>{
res.send(`Update workout ${req.pararms.workoutId}`);
};

const deleteOneWorkout = (req, res) =>{

    res.send(`Delete workout ${req.params.workoutId}`);
};

module.exports = {
    getAllworkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
}