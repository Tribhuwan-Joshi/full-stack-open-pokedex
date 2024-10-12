const app = require("./main");
// get the port from env variable
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

export default app;
