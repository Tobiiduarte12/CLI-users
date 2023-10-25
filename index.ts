import inquirer from "inquirer";
import { getAllUsers } from "./helpers/listOptions";
import { createNewUser } from "./helpers/createNewUser";

const main = async () => {
  let run = true;

  while (run) {
    const actions = await inquirer.prompt([
      {
        type: "list",
        name: "chosenItem",
        message: "Que quieres hacer?",
        choices: [
          {
            name: "Ver todos los usuarios",
            value: 1,
          },
          {
            name: "Crear un usuario",
            value: 2,
          },
          {
            name: "SALIR",
            value: 3,
          },
        ],
      },
    ]);

    switch (actions.chosenItem) {
      case 1:
        await getAllUsers();
        break;
      case 2:
        await createNewUser();
        break;
      case 3:
        run = false;
        break;

      default:
        run = false;
        break;
    }
  }
};

main();
