const deletePolygon = (id) => {
  const data = {};
  const Users = JSON.parse(sessionStorage.getItem("Users")) || [];
  const currentUser = JSON.parse(localStorage.getItem("User-Data")) || {};

  const foundUser = Users?.find((user) => user._id === currentUser?.user?._id);

  const updatedPolygon = foundUser?.polygons?.filter((poly) => poly._id !== id);

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
  window.location.reload();

  return data;
};

export default deletePolygon;
