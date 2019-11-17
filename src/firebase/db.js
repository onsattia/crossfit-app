import { db } from "./firebase";

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`members/${id}`).set({
    username,
    email
  });

export const onceGetUsers = () => db.ref("members").once("value");
