import token from "./token";
import PAGES_URL from "../pages/pageRoutes";
const registerUser = (userData, callback) => {
  const { email, password } = userData;
  const data = {};
  const Users = JSON.parse(sessionStorage.getItem("Users")) || [];

  const foundUser = Users.find((user) => user.email === email);

  if (foundUser) {
    return (data.error = "User already exist, please try again");
  }
  const tokenData =
    `Ktfbb8g8AdszsxW${password}-6xex64eydxuu-${email}8upp8jWgxfesgzaA`
      .split("")
      .reverse()
      .join("");

  token.set(tokenData);

  const newUser = {
    ...userData,
    polygons: [],
    _id: email + password
  };

  Users.push(newUser);

  sessionStorage.setItem("Users", JSON.stringify(Users));
  data["user"] = {
    ...newUser
  };

  token.set(JSON.stringify(data), "User-Data");

  callback(PAGES_URL.DASHBOARD);
};

export default registerUser;
