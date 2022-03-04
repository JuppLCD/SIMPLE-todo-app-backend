const Todo = require("./../models/Todo");
const controller = {};

controller.allTodos = async (req, res) => {
	try {
		const todos = await Todo.find();
		res.json(todos);
	} catch (e) {
		console.error(e);
	}
};
controller.newTodo = async (req, res) => {
	const { text } = req.body;
	// Valid todo
	if (!text) {
		res.json({ menssage: "invalid todo", error: true });
		return;
	}
	try {
		const newTodo = await Todo({ text: text, completed: false });
		await newTodo.save();
		res.json(newTodo);
	} catch (e) {
		console.error(e);
	}
};
controller.deleteTodo = async (req, res) => {
	const id = req.params.id;
	try {
		const todoToDelete = await Todo.findByIdAndDelete({ _id: id });
		if (todoToDelete) {
			res.json({
				deleted: true,
			});
		} else {
			res.json({
				deleted: false,
			});
		}
	} catch (e) {
		console.error(e);
	}
};
controller.updateTodo = async (req, res) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const todoDB = await Todo.findByIdAndUpdate(id, body, { useFindAndModify: false });
		res.json({
			edited: true,
			todoEditer: todoDB,
		});
	} catch (e) {
		console.error(e);

		res.json({
			edited: false,
			mensaje: e,
		});
	}
};

module.exports = controller;
