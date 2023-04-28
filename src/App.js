import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetail,
  SearchFeed,
  ChannelDetail,
  Registeration,
} from "./components";
import { UserContext } from "./context/AuthContext";

const App = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          <Route path="/register" element={<Registeration />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
