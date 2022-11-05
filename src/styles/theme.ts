// theme.js
import { extendTheme } from '@chakra-ui/react'

// Version 1: Using objects
export const theme = extendTheme({
  colors: {
    backgroundDark: '#191b1d',
  },
  styles: {
    global: {
      body: {
        bg: '#1F1B24',
        color: 'white'
      }
    }
  }
})
