import PAGES_URL from "../pages/pageRoutes";

const createPolygon = (polygonData, callback) => {
  const data = {};
  const Users = JSON.parse(sessionStorage.getItem("Users")) || [];
  const currentUser = JSON.parse(localStorage.getItem("User-Data")) || {};

  const newPolygonData = {
    ...polygonData,
    _id:
      polygonData?.name +
      polygonData?.size +
      polygonData?.sides?.toString()?.split(" ").reverse().join("")
  };

  const updatedUsers = Users.map((user) => {
    if (user?._id === currentUser?.user?._id) {
      return { ...user, polygons: [...user.polygons, newPolygonData] };
    }

    return user;
  });

  sessionStorage.setItem("Users", JSON.stringify(updatedUsers));
  localStorage.setItem(
    "User-Data",
    JSON.stringify({
      user: {
        ...currentUser?.user,
        polygons: [...currentUser?.user?.polygons, newPolygonData]
      }
    })
  );

  callback(PAGES_URL.DASHBOARD);

  return data;
};

export default createPolygon;
