import React from 'react'
import { connect } from "react-redux";
import * as actionCreators from './actions'
import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  background-color: #4CAF50;
  color: white;
  border: none;
  height: 30px;  
`

const OptionWrap = styled.ul`
  position: absolute;
  display: none;
  top: 30px;
  left: 0;
  height: 200px;
  width: 200px;
  background: #ff00ff;
  ${({ active }) => active && `
    display: block; 
  `}
`

const Option = styled.li`

  
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
        <button onClick={this.handleShow}>{itemsToShow}</button>
        <OptionWrap
          active={show === true}
        >
          <Option onClick={() => { setNumberOfItems('all'); this.handleShow(false) }}>All</Option>
          <Option onClick={() => { setNumberOfItems(10); this.handleShow(false) }}>10</Option>
          <Option onClick={() => { setNumberOfItems(100); this.handleShow(false) }}>100</Option>
          <Option onClick={() => { setNumberOfItems(200); this.handleShow(false) }}>200</Option>
        </OptionWrap>
      </Wrap>
    )
  }
}

const mapStateToProps = (state) => ({
  itemsToShow: state.itemsToShow,
})

export default connect(mapStateToProps, actionCreators)(Filter)
