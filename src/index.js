/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

"strict";

import { render } from "./modules/render";
import { addUsers } from "./modules/addUsers";
import { UserService } from "./modules/userService";
import { removeUsers } from "./modules/removeUsers";

window.userService = new UserService();

userService.getUsers().then((data) => {
  render(data);
});

addUsers();
removeUsers();
