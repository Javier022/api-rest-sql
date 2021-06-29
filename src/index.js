const app = require("./app");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(app.get("port"), () => {
  console.log(`App corriendo en  http://localhost:${app.get("port")}`);
});
