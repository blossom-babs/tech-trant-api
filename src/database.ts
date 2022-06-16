import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const { HOST, DB, ENV, TESTDB, USER, PASSWORD } = process.env;

let client: Pool;

if (ENV === "test") {
  client = new Pool({
    host: HOST,
    database: TESTDB,
    user: USER,
    password: PASSWORD,
  });
} else {
  client = new Pool({
    host: HOST,
    database: DB,
    user: USER,
    password: PASSWORD,
  });
}

export default client;
