import PAGES_URL from "../pages/pageRoutes";
import token from "./token";
const loginUser = (userData, callback) => {
  const { email, password } = userData;
  const data = {};
  const Users = JSON.parse(sessionStorage.getItem("Users")) || [];

  const foundUser = Users?.find((user) => user?.email === email);

  if (!foundUser) {
    data.error = "User record not found";
    return data;
  }

  if (foundUser?.password !== password || foundUser?.email !== email) {
    data.error = "Invalid credentials, please try again";
    return data;
  }

  const tokenData =
    `Ktfbb8g8AdszsxW${password}-6xex64eydxuu-${email}8upp8jWgxfesgzaA`
      .split("")
      .reverse()
      .join("");

  token.set(tokenData);
  token.set(tokenData);

  callback(PAGES_URL.DASHBOARD);
  data["user"] = {
    ...foundUser
  };

  token.set(JSON.stringify(data), "User-Data");

  return data;
};

export default loginUser;
