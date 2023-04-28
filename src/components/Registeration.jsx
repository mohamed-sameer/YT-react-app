import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../utils/firebase";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

const SignUp = () => {
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopUp();
  //   const userDocRef = createUserDocumentFromAuth(user);
  //   // console.log(response);
  // };

  return (
    <Box
      minHeight="95vh"
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <SignInForm />
      <SignUpForm />
    </Box>
  );
};

export default SignUp;
