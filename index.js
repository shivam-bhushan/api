const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "😠",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(408).send({ message: "we need a logo" });
  }

  res.send({
    tshirt: `👚 with your logo ${logo} and id ${id}`,
  });
});

app.listen(PORT, () => console.log(`its working on http://localhost:${PORT}`));
