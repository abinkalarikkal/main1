import { useState } from "react";
import Navadmin from "./Navadmin";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField
} from "@mui/material";
import axios from "axios";

const Managejobs = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    type: "Full-time", // Default job type
    vacancy: "",
    companyId: ""
  });

  // Handle form submit
  async function handlePostSubmit(e) {
    e.preventDefault(); // Fixed typo from preventDefaults to preventDefault
    try {
      const jobData = {
        title: input.title,
        description: input.description,
        requirements: input.requirements,
        salary: input.salary,
        location: input.location,
        jobType: input.type, // Using 'type' for jobType
        vacancy: input.vacancy,
        companyId: input.companyId
      };
      const res = await axios.post(`${JOB_API_END_POINT}/post`, jobData, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Handle input change
  const handleChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <header>
        <Navadmin />
      </header>
      <main>
        <h3 align="center">Add Job</h3>
        <form
          method="POST"
          onSubmit={handlePostSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            gap: "0.25rem",
            width: "100%",
            maxWidth: "33%",
            margin: "0.25rem auto"
          }}
        >
          <FormControl className="form-field">
            <label htmlFor="title">Job Title</label>
            <TextField
              required
              onChange={handleChange}
              value={input.title}
              name="title"
              id="title"
              placeholder="Senior Web Developer"
              variant="outlined"
              size="small"
              fullWidth
            />
          </FormControl>

          <FormControl className="form-field">
            <label htmlFor="description">Description</label>
            <TextField
              required
              onChange={handleChange}
              value={input.description}
              name="description"
              id="description"
              placeholder="Proficient in Web Development tech"
              variant="outlined"
              size="small"
              fullWidth
            />
          </FormControl>

          <FormControl className="form-field">
            <label htmlFor="requirements">Requirements</label>
            <TextField
              required
              onChange={handleChange}
              value={input.requirements}
              name="requirements"
              id="requirements"
              placeholder="HTML/CSS, tailwindcss, Bootstrap etc."
              variant="outlined"
              size="small"
              fullWidth
            />
          </FormControl>

          <FormControl className="form-field">
            <label htmlFor="location">Location</label>
            <TextField
              required
              onChange={handleChange}
              value={input.location}
              name="location"
              id="location"
              placeholder="Vadakara, Kerala, India"
              variant="outlined"
              size="small"
              fullWidth
            />
          </FormControl>

          <FormControl className="form-field">
            <label htmlFor="salary">Salary</label>
            <TextField
              required
              onChange={handleChange}
              value={input.salary}
              name="salary"
              id="salary"
              placeholder="120000"
              variant="outlined"
              size="small"
              fullWidth
            />
          </FormControl>

          <FormControl className="form-field">
            <label htmlFor="job-type" className="form-label">
              Job Type:
            </label>
            <RadioGroup
              row
              required
              onChange={handleChange}
              name="type"
              value={input.type} // Correct value for radio buttons
              id="job-type"
            >
              <FormControlLabel
                value="Full-time"
                control={<Radio />}
                label="Full-time"
              />
              <FormControlLabel
                value="Part-time"
                control={<Radio />}
                label="Part-time"
              />
              <FormControlLabel
                value="Internship"
                control={<Radio />}
                label="Internship"
              />
            </RadioGroup>
          </FormControl>

          <FormControl className="form-field">
            <Button variant="contained" type="submit">
              Add
            </Button>
          </FormControl>
        </form>
      </main>
    </>
  );
};

export default Managejobs;
