import bcrypts from "bcryptjs";

const users = [
  {
    name: "Admin User",
    password: bcrypts.hashSync("123456", 10),
    email: "admin@example.com",
    isAdmin: true,
  },
  {
    name: "John Doe",
    password: bcrypts.hashSync("123456", 10),
    email: "john@example.com",
  },
  {
    name: "Jane Doe",
    password: bcrypts.hashSync("123456", 10),
    email: "jane@example.com",
  },
];

export default users;
