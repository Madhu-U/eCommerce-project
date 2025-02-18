import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const Profile = () => {
  const { loggedIn, setLoggedIn } = useContext(ProductContext);
  return (
    <div>
      <button onClick={() => setLoggedIn(false)}>Logout</button>
    </div>
  );
};

export default Profile;
