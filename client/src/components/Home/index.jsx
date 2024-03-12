import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "91vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          sx={{
            height: "50%",
          }}
        >
          <Paper
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            elevation={16}
          >
            <Typography sx={{ mb: 2 }} variant="h3">
              Welcom To Dashboard
            </Typography>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button variant="contained" sx={{ textTransform: "inherit" }}>
                Create Employee
              </Button>
              <Button variant="contained" sx={{ textTransform: "inherit" }}>
                Employee List
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Home;
