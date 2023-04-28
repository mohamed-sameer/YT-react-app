import React, { useContext, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase";
import { Box, Button, FormControl, Typography, TextField } from "@mui/material";
// import { UserContext } from "../context/AuthContext";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  // const { setCurrentUser } = useContext(UserContext);

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);
      //   console.log(user);
      const userDocRef = createUserDocumentFromAuth(user, { displayName });
      resetFormField();
      //   console.log(userDocRef);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h5">Sign up with email and password</Typography>
      <FormControl
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", gap: 2, flexDirection: "column" }}
      >
        <TextField
          label="Display Name"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <TextField
          label="Email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <TextField
          label="Password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <TextField
          label="Confirm Password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </FormControl>
    </Box>
  );
};

export default SignUpForm;
