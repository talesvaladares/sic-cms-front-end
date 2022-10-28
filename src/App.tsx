import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme} from './styles/themes/default';
import { MenuModalProvider } from './context/menuModalContext';
import { ResourceModalProvider } from './context/recourseModalContext';
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <MenuModalProvider>
          <ResourceModalProvider>
            <Router/>
          </ResourceModalProvider>
          <GlobalStyle/>
        </MenuModalProvider>
      </BrowserRouter>
    </ThemeProvider>   

  )
}

