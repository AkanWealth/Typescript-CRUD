import express from "express";
import db from "./models";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.Port || 3000;

app.post("/users", (req, res) => {
  const { name, email, password } = req.body;
  db.User.create({
    name,
    email,
    password,
  }).then((user: any) => {
    res.json(user);
  });
});
app.get("/users", (req, res) => {
  db.User.findAll({}).then((users: any) => {
    res.send(users);
  });
});
app.post("/projects", (req, res) => {
  const { title, status } = req.body;
  db.Project.create({
    title,
    status,
  }).then((project: any) => {
    res.json(project);
  });
});
app.get("/projects", (req, res) => {
  db.Project.findAll({}).then((projects: any) => {
    res.send(projects);
  });
});
app.get("/", (req, res) => {
  db.User.findAll({
    include: [
      {
        model: db.Project,
        as: "Projects",
      },
    ],
  }).then((users: any) => {
    res.send(users);
  });
});

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
});
