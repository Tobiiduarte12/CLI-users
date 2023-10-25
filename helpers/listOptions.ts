import { getWithFS, saveWithFS } from "./fsMethods";
import { newUserPromts } from "./userPromts";

export const getAllUsers = async () => {
  const currentUsers = await getWithFS("users");

  console.log(currentUsers);
};

export const createNewUser = async () => {
  const newUserData = await newUserPromts();

  const currentUsers = await getWithFS("users");

  currentUsers.push(newUserData: IUser[]);

  await saveWithFS("users", currentUsers);
};
