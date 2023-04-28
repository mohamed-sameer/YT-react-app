import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./index";
import { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { signOutUser } from "../utils/firebase";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // };
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
        LOGO
      </Link>
      <Stack direction="row" alignItems="center" pr={2}>
        <SearchBar />
        {currentUser ? (
          <Link
            className="category-btn"
            style={{
              background: "#FC1503",
              color: "#fff",
              fontSize: "14px",
              fontFamily: "roboto",
              borderRadius: "20px",
            }}
            to="/register"
            onClick={signOutUser}
          >
            Sign Out
          </Link>
        ) : (
          <Link
            className="category-btn"
            style={{
              background: "#FC1503",
              color: "#fff",
              fontSize: "14px",
              fontFamily: "roboto",
            }}
            to="/register"
          >
            Sign In
          </Link>
        )}
      </Stack>
    </Stack>
  );
};
export default Navbar;
