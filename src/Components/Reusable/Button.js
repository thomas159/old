import React from 'react'
import styled from 'styled-components'
import * as palette from '../../variables'

export const Button = styled.button`
  margin: 0;
  border: 0;
  padding: 0;
  outline: 0;
  padding: 10px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 3px;
  background: ${palette.green};
  cursor: pointer;
  &:hover {
    transition: all 0.25s ease;
    background: ${palette.darkGreen};
  }
`

export default Button
