import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme} from './styles/themes/default';
import { MainContainer  } from './styles/Components/MainContainer'
import { Header  } from './styles/Components/header';
import { MenuModalProvider } from './context/menuModalContext'

import { Home } from './pages/Home'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <MenuModalProvider>
        
        <Header/>
          <MainContainer>
            <Home/>
          </MainContainer>
        <GlobalStyle/>
        
      </MenuModalProvider>
    </ThemeProvider>   

  )
}

