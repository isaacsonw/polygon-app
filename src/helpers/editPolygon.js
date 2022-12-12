import PAGES_URL from "../pages/pageRoutes";

const editPolygon = (polygonData, callback) => {
  const data = {};
  const Users = JSON.parse(sessionStorage.getItem("Users")) || [];
  const currentUser = JSON.parse(localStorage.getItem("User-Data")) || {};

  const foundUser = Users?.find((user) => user._id === currentUser?.user?._id);

  const updatedPolygon = foundUser?.polygons?.map((poly) => {
    if (polygonData._id === poly?._id) {
      return {
        ...poly,
        ...polygonData
      };
    }
    return poly;
  });

  const updatedUsers = Users.map((user) => {
    if (user?._id === currentUser?.user?._id) {
      return { ...user, polygons: [...updatedPolygon] };
    }

    return user;
  });

  sessionStorage.setItem("Users", JSON.stringify(updatedUsers));
  localStorage.setItem(
    "User-Data",
    JSON.stringify({
      user: {
        ...currentUser?.user,
        polygons: [...updatedPolygon]
      }
    })
  );

  callback(PAGES_URL.DASHBOARD);

  return data;
};

export default editPolygon;
