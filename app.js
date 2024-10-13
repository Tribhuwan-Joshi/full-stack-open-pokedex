const app = require("./main");
// get the port from env variable or set it to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server  started on port ${PORT}`);
});
