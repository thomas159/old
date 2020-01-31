import React from 'react'
import styled from 'styled-components'
import Element from '../../Reusable/Element'

const Wrap = styled.div`
  display: flex; 
  flex-direction: row;
  padding: 10px 0;
  text-transform: capitalize;
`

const SelectedElements = ({ onRemoveItem, selectedItems }) => (
  <Wrap>
    {selectedItems.length > 0 && selectedItems.map((selectedItem) => (
      <div
        key={selectedItem.name}
        onClick={() => onRemoveItem(selectedItem)}
        onKeyDown={() => onRemoveItem(selectedItem)}
        role="button"
      >
        <Element
          selectedItem={selectedItem}
        />
      </div>
      ),
    )}
  </Wrap>
)
export default SelectedElements
