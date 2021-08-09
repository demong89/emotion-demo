import logo from './logo.svg';
import './App.css';
import {css,ThemeProvider,useTheme} from '@emotion/react'
import styled from '@emotion/styled'
import Css from './css'
// import { ThemeProvider } from 'emotion-theming'

// const style = css`
//   width: 100px;
//   height: 200px;
//   background: red;
// `

const style = css({
  width: 200,
  height: 200,
  background: 'blue'
})
const fugai = css`
  border: 4px solid blue;


`
const Button = styled.button`
  background: ${props=>props.bgColor||'red'};
`
const Container = styled.div`
  background: pink;
  width: 500px;
  height: 100px;

`

const theme = {
  colors:{
    primary:'tomato'
  }
}

const primaryColor = props => css`
  color:${props.colors.primary}
`

function App() {


  return (
    <ThemeProvider theme={theme}>
      <header className="App-header">

        <div css={primaryColor}>
          App
        </div>

        <Container>
          <Button bgColor='green'>button</Button>
        </Container>

        <Css css={fugai}></Css>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p css={{width:100,height:100,background:'red'}}> */}
        <p css={style}>
          src/App.js
        </p>
       
          Learn React
       
      </header>
    </ThemeProvider>
  );
}

export default App;
