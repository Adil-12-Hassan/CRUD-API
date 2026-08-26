import Todo from "../model/todoModel.js";
import express from 'express'
// Get all todos
export const getTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find({ userId: req.user._id });
        res.json(todos);
    } catch (error) {
        next(error);
    }
}
// POST create todo
export const createTodo = async (req, res, next) => {
    try {
        const { title } = req.body;
        const todo = await Todo.create({
            title, userId: req.user._id
        })
        res.status(201).json(todo)
    } catch (error) {
        next(error)
    }
};

// PUT update todo 
export const updateTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
        todo.title = req.body.title || todo.title;
        todo.completed = req.body.completed ?? todo.completed;
        const updatedTodo = await todo.save();
        res.json(updateTodo);
    } else {
        res.status(404).json({
            message: "Todo not found."
        });
    }
};
// DELETE todo
export const deleteTodo = async (req, res) => {
    const todo = await Todo.findOne({
        _id: req.params.id,
        userId: req.user._id
    });
    if (todo) {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({
            message: "Todo Removed/Deleted"
        });
    }
};