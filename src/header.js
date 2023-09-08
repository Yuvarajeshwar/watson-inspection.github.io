import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import styled from '@emotion/styled'
import logo from './logo.png';

const StyledAppBar = styled(AppBar)`
  background-color: #282c34; /* Customize the background color */
`

const StyledTitle = styled(Typography)`
  flex-grow: 1;
`

const LogoImage = styled.img`
  max-height: 60px; /* Adjust the height as needed */
  margin-right: 10px; /* Add spacing between logo and title */
`;

function Header() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <LogoImage src={logo} alt="Logo" />
        <StyledTitle variant="h6">
          Watson
        </StyledTitle>
        {/* Add more styled components for buttons, icons, or user profile here */}
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header
