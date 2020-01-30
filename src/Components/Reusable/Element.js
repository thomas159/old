import styled from 'styled-components'
import React from 'react'
import { Close } from '../../images'

const Wrap = styled.div`
  display: grid;
  background: #000;
  color: #fff;
  padding: 10px 0 10px 10px;
  grid-template-columns: auto 30px;
  margin-right: 10px;
  cursor: pointer;    
`

const Item = styled.div`
  display: flex;
  padding: 0 10px 0 0;
  border-right: 1px solid #fff;
  align-items: center;
`
const Cross = styled.div`
  display: flex;
  justify-content: center;
`

const Element = ({ selectedItem }) => (
  <Wrap>
    <Item>
      {selectedItem}
    </Item>
    <Cross>
      <Close />
    </Cross>
  </Wrap>
)

export default Element
