import React, { useState, useContext } from "react";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopUp,
} from "../utils/firebase";
// import { UserContext } from "../context/AuthContext";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopUp();
  };

  // handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("clicked");
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // console.log(response);
      // setCurrentUser(user);
      resetFormField();
    } catch (error) {
      console.log(error);
    }
  };

  // handle change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" mb={2}>
        Sign in With Email and Password
      </Typography>
      <FormControl
        component="form"
        sx={{ width: "100%", gap: 2 }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <TextField
          label="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={logGoogleUser}>
            Sign In With Google Popup
          </Button>
        </Box>
      </FormControl>
      {/* <Button onClick={signInWithGoogleRedirect}>
          Sign In With Google Redirect
        </Button> */}
    </Box>
  );
};

export default SignInForm;
