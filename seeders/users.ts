import { v4 as uuidv4 } from "uuid";

console.log(uuidv4());

export const users = [
  {
    id: uuidv4(),
    name: "John Doe",
    email: "jd@gmail.com",
    password: "test1234",
  },
  {
    id: uuidv4(),
    name: "Peter Peters",
    email: "pp@gmail.com",
    password: "test1234",
  },
];
