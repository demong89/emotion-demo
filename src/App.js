import logo from './logo.svg';
import './App.css';
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import Css from './css'

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



function App() {
  return (
    <div className="App">
      <header className="App-header">
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
    </div>
  );
}

export default App;
