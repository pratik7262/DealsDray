import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Box>
        {localStorage.getItem("token") ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Form />} />
              <Route path="/edit/:id" element={<Form edit />} />
            </Routes>
          </>
        ) : (
          <Login />
        )}
      </Box>
    </div>
  );
}

export default App;
