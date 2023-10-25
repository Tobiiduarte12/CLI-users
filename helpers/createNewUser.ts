import { getWithFS, saveWithFS } from "./fsMethods";
import { newUserPromts } from "./userPromts";

export const createNewUser = async () => {
  const newUserData = await newUserPromts();

  const currentUsers = await getWithFS("users");

  currentUsers.push(newUserData);

  await saveWithFS("users", currentUsers);
};
