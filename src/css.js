import React from 'react'
import {css} from '@emotion/react'

const style = css`
  width: 300px;
  height: 300px;
  border: 3px solid red;
`
function Css(props){
  return <div css={style} {...props}>
    demo
  </div>
}

export default Css
