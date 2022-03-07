import React, { useState } from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { AppBarComponent, Sidebar, Menu } from './components'
import { ROUTES, MAIN, BLOTTER, TRADETICKET } from './routes'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Blotter, Dashboard, Tradeticket } from './feature'
import { store } from './store'
import { Provider } from 'react-redux'

export const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark')
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false)
  const navigate = useNavigate()

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  })

  const handleDrawerToggle = React.useCallback(() => {
    setSidebarToggle(!sidebarToggle)
  }, [sidebarToggle])

  const onThemeChange = React.useCallback(() => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
  }, [themeMode])

  const manuClickHandler = React.useCallback(
    (link) => {
      navigate(link)
      setSidebarToggle(!sidebarToggle)
    },
    [navigate, sidebarToggle],
  )

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBarComponent
          handleDrawerToggle={handleDrawerToggle}
          onThemeChange={onThemeChange}
          isDarkMode={themeMode === 'dark'}
          isDrawerOpen={sidebarToggle}
        />
        <Sidebar
          isOpen={sidebarToggle}
          handleDrawerToggle={handleDrawerToggle}
          children={<Menu links={ROUTES} manuClickHandler={manuClickHandler} />}
        />
        <Routes>
          <Route path={MAIN} element={<Dashboard />} />
          <Route path={BLOTTER} element={<Blotter />} />
          <Route path={TRADETICKET} element={<Tradeticket />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  )
}
