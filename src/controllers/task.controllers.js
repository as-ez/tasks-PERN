const pool = require("../db");

const getAllTasks = async (req, res) => {
  try {
    const alltasks = await pool.query("SELECT * FROM task");
    res.json(alltasks.rows);
  } catch (e) {
    res.json({ error: e.message });
  }
};

const getTask = async (req, res) => {
  
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Task not found",
      });
    res.json(result.rows[0]);
  } catch (e) {
    res.json({ error: e.message });
  }
};

const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    res.json(result.rows[0]);
  } catch (e) {
    res.json({ error: e.message });
  }
};

const deleteTask = (req, res) => {
  res.send("Hola");
};

const updateTask = (req, res) => {
  res.send("Hola");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
