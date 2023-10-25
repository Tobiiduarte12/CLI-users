import inquirer from "inquirer";
import { IUser } from "../interfaces/interfaces";

export const newUserPromts = async (): Promise<IUser[]> => {
  return await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Ingresa tu nombre",
    },
    {
      type: "input",
      name: "surname",
      message: "Ingresa tu apellido",
    },
    {
      type: "number",
      name: "age",
      message: "Ingresa tu edad",
    },
  ]);
};
