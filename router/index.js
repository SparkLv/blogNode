import tag from "tag";

export default function(app) {
  app.get("/tag", tag);
}
