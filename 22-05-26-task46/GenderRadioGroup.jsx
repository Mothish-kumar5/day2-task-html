// GenderRadioGroup.jsx
import * as React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function GenderRadioGroup() {
  const [gender, setGender] = React.useState("male");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>

      <RadioGroup value={gender} onChange={handleChange}>
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Male"
        />

        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Female"
        />
      </RadioGroup>
    </FormControl>
  );
}
export default GenderRadioGroup;