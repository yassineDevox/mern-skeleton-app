// With the Express app configured to accept HTTP requests, we can go ahead
// and use it to implement a server that can listen for incoming requests.

import config from "../config/config";
import app from "./express";

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
