// @desc Get goals
// @route GET /api/goals
//@access Private
const getGoals = (req,res) => {
    res.status(200).json({message: 'Get Goals'})
}

// @desc Set goals
// @route SET /api/goals
//@access Private
const setGoal = (req,res) => {
    res.status(200).json({message: 'Set Goals'})
}

// @desc Update goal
// @route PUT /api/goals/:id
//@access Private
const updateGoal = (req,res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc Detele goals
// @route DELETE /api/goal
//@access Private
const deleteGoal = (req,res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,setGoal,updateGoal,deleteGoal
}