import React from 'react'
import Navuser from './Navuser'
import { Box, Button, Grid, Paper,Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from 'react-redux';


const Userinfo = () => {
  const heading = { fontSize: "2rem", fontWeight: "600" };
  const paperStyle = { padding: "2rem", margin: "50px auto", borderRadius: "1rem", boxshadow: "10px 10px" }
  const { user } = useSelector(store => store.auth);
  // console.log(user);

  const nav = useNavigate()
  return (
    <div style={{ textAlign: "center" }}>

      <Navuser />
      <br></br><br></br>
      
      
      
{/* 
      <section id="profile-section-card">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
         
        </div>
       <Grid container spacing={0}>
        <Box>
          <br></br><br></br><br></br><br></br><br></br>
        <div id="profile-content">
          <figure
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "100%",
              border: "0.05rem solid black",
              overflow: "hidden",
              alignSelf: "left",
              // border: "1px solid red"
            }}
          >
             
            <img
              src="data:image/png;base64,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"
              alt="profile picture"
              id="profileImg"
            />
            
          </figure> 
          </div>
          </Box>
           */}
      
          <Paper
          
          style={paperStyle}
          sx={{
            alignItems:"center",
            justifyContent: "space-between",
        
            alignContent:"center",
            borderRadius: "3rem",
    boxShadow: "1px 1px 1px 1px",
            width: {
              xs: "75vw",
              sm: "30vw",
              md: "35vw",
              lg: "25.5vw",
              xl: "20.5vw"
            },
            height: "auto"
          }}
          
        >
          <br></br>

          
          <Typography style={heading}> 
            
             <div id="edit-button" style={{ margin: "auto" }}>
             Profile 
             <Button
              // sx={{
              //   display: "block",
              //   height: "0rem",
              // }}
              onClick={() => {
                nav("/Update")
              }}
             >
              <EditIcon />
            </Button>
          </div>
          
          </Typography>
          

        
          
          

          <article
            style={{
              fontFamily: "Poppins, sans-serif",
             
            }}


          >
            
            {/* <Card
            sx={{
              alignSelf:"center"
            }}> */}
           
            <Box
            sx={{
            flexGrow: 1,
            height: "100%",
            width:"auto",
            //padding: "0.01rem",
            margin: "1rem",
            border: "1px solid black",
            borderRadius: "0.5rem",

          }}
          >
            <div id="Firstname">
              <h4 className="profile-details">Full Name</h4>
              <span>{user?.firstname}</span>
            </div>
            </Box>
            <Box
            sx={{
            flexGrow: 1,
            height: "80%",
            width:"auto",
           // padding: "0.1rem",
            margin: "1rem",
            border: "1px solid black",
            borderRadius: "0.5rem",

          }}
          >

            <div id="Lastname">
              <h4 className="profile-details">Full Name</h4>
              <span>{user?.lastname}</span>
            </div>
            </Box>
            <Box
            sx={{
            flexGrow: 1,
            height: "80%",
            width:"auto",
           // padding: "0.1rem",
            margin: "1rem",
            border: "1px solid black",
            borderRadius: "0.5rem",

          }}
          >
            <div id="PhoneNo">
              <h4 className="profile-details">Phone Number</h4>
              {<span>{user?.phno}</span>}
            </div>
            </Box>
            <Box
            sx={{
            flexGrow: 1,
            height: "100%",
            width:"auto",
           // padding: "0.1rem",
            margin: "1rem",
            border: "1px solid black",
            borderRadius: "0.5rem",

          }}
          >

            <div id="Email">
              <h4 className="profile-details">E-mail Address</h4>
              <span>{user?.email}</span>
            </div>
            </Box>
            {/* <Box
            sx={{
            flexGrow: 1,
            height: "100%",
            width:200,
            padding: "0.2rem",
            margin: "1rem",
            border: "1px solid black",
            borderRadius: "0.5rem",

          }}
          > */}

            <div id="Bio">
              <span>{user?.profile?.bio}</span>
            </div>
            {/* </Box> */}
            <Box
            sx={{
            flexGrow: 1,
            height: "100%",
            width:"auto",
            //padding: "0.1m",
            margin: "1rem",
            border: "1px solid black",
            borderRadius: "0.5rem",

          }}
          >

            <div id="Skills">
              <h4 className="profile-details">Skill Set</h4>
              <p className="skills-array">HTML/CSS, JavaScript, Python</p>
            </div>
            </Box>
  
            {/* </Card> */}
          </article>
          </Paper>
         
          
          
          {/* </Grid> */}
       
    {/* </section> */}


    </div>
  )
}

export default Userinfo

