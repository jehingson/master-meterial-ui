import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Switch as ThemeSwitch,
  Grid,
} from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

interface Props {
  handleDrawerToggle: () => void
  onThemeChange: () => void
  isDarkMode: Boolean
  isDrawerOpen: boolean
}

export const AppBarComponent: React.FC<Props> = ({
  handleDrawerToggle,
  onThemeChange,
  isDarkMode,
  isDrawerOpen,
}): JSX.Element => {
  return (
    <div>
      <AppBar position="static" variant="elevation" className="appbar-wrapper">
        <Toolbar variant="dense">
          <Grid container alignItems="center">
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconButton
                color="inherit"
                onClick={handleDrawerToggle}
                edge="start"
                sx={{ mr: 2, ...(isDrawerOpen && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="subtitle1" component="div">
                React Repo Trading App
              </Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {isDarkMode ? <DarkModeIcon /> : null}
            <ThemeSwitch size="small" onChange={onThemeChange} />
            {!isDarkMode ? <LightModeIcon /> : null}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
