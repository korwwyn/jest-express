const { Client } = require("pg");
const db = process.env.NODE_ENV === "test" ? "students_test" : "students";

client = new Client({
  host: "172.17.0.3",
  port: 5432,
  password: "mysecretpassword",
  user: "postgres",
  database: `${db}`
});

client.connect();

module.exports = client;