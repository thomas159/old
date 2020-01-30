import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import * as actionCreators from './actions'

const Wrap = styled.div`
  position: relative;
  color: white;
  border: none;
  width: 100%;
`

const OptionWrap = styled.ul`
  position: absolute;
  display: none;
  top: 20px;
  left: 0;
  height: 200px;
  width: 100%;
  background: #f9f9f9;
  border-top: 1px solid #000;
  ${({ active }) => active && `
    display: block; 
  `}

`

const Option = styled.li`
  color: #000;
  cursor: pointer;
  padding: 0 0 0 10px;
`

const StyledButton = styled.button`
  width: 100%;
  margin: 0;
  padding: 0;
  outline: 0;
  height: 21px;
  background: #fff;
  border: 0;
  text-transform: capitalize;
  cursor: pointer;

`

class Filter extends React.Component {
  state = {
    show: false,
  }

  handleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }))
  }

  render() {
    const { itemsToShow, setNumberOfItems } = this.props
    const { show } = this.state
    return (
      <Wrap>
        <StyledButton onClick={this.handleShow}>{itemsToShow}</StyledButton>
        <OptionWrap active={show === true}>
          <Option onClick={() => { setNumberOfItems('all'); this.handleShow(false) }}>show All</Option>
          <Option onClick={() => { setNumberOfItems(10); this.handleShow(false) }}>upto 10</Option>
          <Option onClick={() => { setNumberOfItems(100); this.handleShow(false) }}>upto 100</Option>
          <Option onClick={() => { setNumberOfItems(200); this.handleShow(false) }}>upto 200</Option>
        </OptionWrap>
      </Wrap>
    )
  }
}


// Filter.propTypes = {
//   addItem: PropTypes.func.isRequired,
//   clearItems: PropTypes.func.isRequired,
//   itemsToShow: PropTypes.func.isRequired,
//   removeItem: PropTypes.func.isRequired,
//   selectedItems: PropTypes.array,
//   setNumberOfItems: PropTypes.func.isRequired,
// }

// Filter.defaultProps = {
//   selectedItems: [],
// }

const mapStateToProps = (state) => ({
  itemsToShow: state.itemsToShow,
})

export default connect(mapStateToProps, actionCreators)(Filter)
