// ThemeSwitch.jsx
import * as React from "react";
import { FormControlLabel, Switch, Typography, Box } from "@mui/material";



function ThemeSwitch() {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleToggle = (event) => {
    setDarkMode(event.target.checked);
  };

  return (
    <Box
      sx={{
        bgcolor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        p: 3,
        borderRadius: 2,
        width: 250,
      }}
    >
      <FormControlLabel
        control={
          <Switch checked={darkMode} onChange={handleToggle} />
        }
        label={darkMode ? "Dark Mode" : "Light Mode"}
      />

      <Typography>
        Current Mode: {darkMode ? "Dark" : "Light"}
      </Typography>
    </Box>
  );
}

export default ThemeSwitch;