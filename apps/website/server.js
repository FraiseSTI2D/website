import express from "express";
import compression from "compression";
import morgan from "morgan";
import { createRequestHandler } from "@remix-run/express";
import * as serverBuild from "@remix-run/dev/server-build";

const app = express();

app.disable("x-powered-by");
app.use(compression());
app.use(morgan("tiny"));
app.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);
app.use(express.static("public/build", { maxAge: "1h" }));

app.get("/auth", (req, res) => res.redirect("/auth/login"))

app.all(
  "*",
  createRequestHandler({
    build: serverBuild,
    mode: process.env.NODE_ENV,
  })
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
