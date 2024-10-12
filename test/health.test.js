const app = require("../main");
const supertest = require("supertest");

const api = supertest(app);

test("health point is working", async () => {
  await api.get("/health").expect(200);
});
