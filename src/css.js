import React from 'react'
import {css,useTheme} from '@emotion/react'

const style = css`
  width: 300px;
  height: 300px;
  border: 3px solid red;
`
function Css(props){
  const theme1 = useTheme();
  console.log(theme1);
  return <div css={css`color:${theme1.colors.primary}`} >
    demo
  </div>
}

export default Css
