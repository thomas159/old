import React from 'react'
import styled from 'styled-components'
import Element from '../../Reusable/Element'

const Wrap = styled.div`
  display: flex; 
  flex-direction: row;
  padding: 10px 0;
`

const SelectedElements = ({ removeItem, selectedItems}) => (
  <Wrap>
    {selectedItems.length > 0 && selectedItems.map((index, selectedItem) => (
      <div key={index} onClick={() => removeItem(index)}>
      <Element selectedItem={ selectedItem } />
      </div>
      ),
    )}
  </Wrap>
)
export default SelectedElements
