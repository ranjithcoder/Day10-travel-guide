import { InputBase, Typography } from '@material-ui/core'
import { AppBar, Box, Toolbar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { Autocomplete } from '@react-google-maps/api'
import React from 'react'
import useStyles from './Styles'

const Header = () => {
    const classes = useStyles();
    return (
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h4'>
            Travel Advisor
          </Typography>
          <Box display='flex'>
            <Typography className={classes.title} variant='h6'>
              Explore new places
            </Typography>
            {/* <Autocomplete> */}
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon/>
                </div>
                <InputBase
                  placeholder='Search…'
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }} 
                />
              </div>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </AppBar>
    )
}

export default Header
