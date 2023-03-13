import { useState } from 'react'
import { Button } from './components/button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="danger" />
      <Button variant="primary" />
      <Button variant="success" />
      <Button variant="warning" />
    </ThemeProvider>
  )
}

