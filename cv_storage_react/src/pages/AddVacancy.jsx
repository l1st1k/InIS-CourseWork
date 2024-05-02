import { Container, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { add_vacancy } from "../API";
import React from "react";

export const AddVacancy = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !event.target.major.value ||
      !event.target.years_of_exp.value ||
      !event.target.skills.value
    ) {
      alert("Please fill all fields.");
      return;
    }
    const vacancyData = {
      major: event.target.major.value,
      years_of_exp: parseInt(event.target.years_of_exp.value, 10),
      skills: event.target.skills.value,
    };

    const vacancy_id = await add_vacancy(vacancyData);
    console.log("Added new vacancy");
    navigate(`/vacancy/${vacancy_id}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Typography variant="h5" align="center" color="#d2d2d2" paragraph>
          Vacancy Creation Form
        </Typography>
        <form
          onSubmit={handleSubmit}
          noValidate
          style={{ width: "100%", marginTop: 1 }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="major"
            label="Major"
            name="major"
            autoComplete="major"
            InputLabelProps={{
              style: { color: "#cbaeff" },
            }}
            InputProps={{
              style: { color: "#cbaeff" },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="years_of_exp"
            label="Year of experience"
            id="years_of_exp"
            InputLabelProps={{
              style: { color: "#cbaeff" },
            }}
            InputProps={{
              style: { color: "#cbaeff" },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="skills"
            label="Skills"
            id="skills"
            InputLabelProps={{
              style: { color: "#cbaeff" },
            }}
            InputProps={{
              style: { color: "#cbaeff" },
            }}
          />
          <Typography variant="subtitle2" align="center" color="#d2d2d2">
            Better description will lead to better results from the
            recommendation system!
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              margin: "24px 0 16px",
              color: "black",
              bgcolor: "#cbaeff",
            }}
          >
            Create vacancy
          </Button>
        </form>
      </div>
    </Container>
  );
};
