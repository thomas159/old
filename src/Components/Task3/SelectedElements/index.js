import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Element from '../../Reusable/Element'

const Wrap = styled.div`
  display: flex; 
  flex-direction: row;
  padding: 10px 0;
  text-transform: capitalize;
`

// static PropTypes = {
  
// }
const SelectedElements = ({ removeItem, selectedItems}) => (
  <Wrap>
    {selectedItems.length > 0 && selectedItems.map((selectedItem, index) => (
      <div 
        key={index}
        onClick={() => removeItem(selectedItem)}
      >
        {console.log(selectedItem)}
        <Element
          selectedItem={selectedItem} 
        />
      </div>
      ),
    )}
  </Wrap>
)
export default SelectedElements
