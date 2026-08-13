const fastify = require("fastify")({ logger: true });
const mongoConnect = require("./util/database.js");
const todoSchema = require("./util/schema");

fastify.register(require("./routes/todo.js"));

mongoConnect(() => {
  const start = async () => {
    try {
      await fastify.listen({ port: 3000, host: "0.0.0.0" });
      console.log(" Server on port 3000");
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };
  start();
});
