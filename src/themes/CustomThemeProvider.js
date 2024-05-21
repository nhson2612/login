import React, {useState, useEffect} from 'react'
import darkTheme from './DarkTheme'
import lightTheme from './LightTheme'
import { useSelector } from 'react-redux'
import { ThemeProvider } from '@emotion/react'
import { selectTheme } from '../redux/ThemeSlice'

const defaultTheme = lightTheme

const CustomThemeProvider = ({children}) => {
    const [activeTheme, setActiveTheme] = useState(defaultTheme)
    const theme = useSelector(selectTheme)
    useEffect(() => {
        switch (theme) {
            case 'light':
                setActiveTheme(lightTheme)
                break
            case 'dark':
                setActiveTheme(darkTheme)
                break
            default:
                setActiveTheme(lightTheme)
        }
    }, [theme])
  return (
    <div>
        <ThemeProvider theme={activeTheme}>
            {children}
        </ThemeProvider>
    </div>
  )
}

export default CustomThemeProvider