const Todo = require("../util/schema");
function todoRoutes(fastify, Option, done) {
  fastify.get("/todos", async (req, reply) => {
    const allTodos = await Todo.find();
    return allTodos;
  });

  fastify.get("/todos/:id", async (req, reply) => {
    const foundTodo = await Todo.findById(req.params.id);
    if (!foundTodo) return reply.status(404).send({ message: "not found" });
    return foundTodo;
  });

  fastify.post("/todos", async (req, reply) => {
    const { title, describe } = req.body;
    const newTodo = new Todo({ title, describe });
    return await newTodo.save();
  });

  fastify.patch("/todos/:id", async (req, reply) => {
    const { id } = req.params;
    const updateData = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedTodo) return reply.status(404).send({ message: "not found" });
    return updatedTodo;
  });

  fastify.delete("/todos/:id", async (req, reply) => {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) return reply.status(404).send({ message: "not found" });
    return { message: "deleted" };
  });

  done();
}

module.exports = todoRoutes;
