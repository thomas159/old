import styled from 'styled-components'
import React from 'react'

const StyledH3 = styled.h2`
  font-size: 20px;
`
const H3 = ({children}) => (
  <StyledH3>{children}</StyledH3>
)

export default H3
