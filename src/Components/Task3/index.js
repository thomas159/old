import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Container from '../Reusable/Container'
import * as palette from '../../variables'
import H2 from '../Reusable/H2'
import H3 from '../Reusable/H3'
import Button from '../Reusable/Button'
import * as actionCreators from './actions'
import SelectedElements from './SelectedElements'
import Filter from './Filter'

const WidgetWrap = styled.div`
  display: grid;
  width: 600px;
  border: 1px solid ${palette.borderColor};
  background: #fff;
  padding: 20px;
  justify-items: start;
`

const ListWrap = styled.div`
  width: 100%;
  background: ${palette.lightGrey};
  padding: 20px;
  color: #fff;
`
const ElementsListWrap = styled.div`
  background: #000;
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
`

const SearchFilterWrap = styled.div`
  display: grid;
  grid-template-columns: 50% 50% ;
`

const ButtonWrap = styled.div`
`

const ElementWrap = styled.div`
  text-align: left;
  padding: 5px 0 0 20px;
  cursor: pointer;
  ${({ active }) => active && `
    background: ${palette.darkGreen};
  `}
`

const SearchOption = styled.div`
  display: grid;
  grid-template-columns: 100px auto ;
`
const FilterOption = styled.div`
  display: grid;
  grid-template-columns: 100px auto ;
`

class Task3 extends React.Component {
  state = {
    searchValue: '',
  }

  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value })
  }

  handleAddElement = (item) => {
    const { selectedItems, removeItem, addItem } = this.props
    selectedItems.includes(item) ? removeItem(item) : selectedItems.length <= 2 && addItem(item)
  }

  render() {
    const { addItem, itemsToShow, removeItem, selectedItems } = this.props
    const { searchValue } = this.state
    const filledArray = [...Array(301)].map((_, i) => `element ${i}`)
    return (
      <Container>
        <WidgetWrap>
          <H2>Select Items</H2>
          <H3>
            You currently have&nbsp;
            {selectedItems.length}
            &nbsp;
            selected items
          </H3>

          <SelectedElements selectedItems={selectedItems} removeItem={removeItem} />
          <Button>Change</Button>
          <ListWrap>
            <H3>
              Select Items
            </H3>
            <SearchFilterWrap>
              <SearchOption>
                <div>
                search
                </div>
                <div>
                  <form>
                    {console.log(this.state.searchValue)}
                    <input
                      name="text"
                      type="text"
                      placeholder="Search"
                      onChange={event => this.handleOnChange(event)}
                      value={this.state.searchValue}
                    />
                  </form>
                </div>
              </SearchOption>
              <FilterOption>
              <div>
                filter
                </div>
                <div>
                <Filter />
                </div>
              </FilterOption>
            </SearchFilterWrap>
            <ElementsListWrap>
              {/* filter((item) => this.state.searchValue.includes(item)) */}
              {filledArray.slice(0, itemsToShow !== 'all' ? itemsToShow : filledArray.length)
              .filter((item) => new RegExp(`^${searchValue}`).test(item))
              .map((index) => (
                <div
                  key={index} 
                  onClick={ () => { this.handleAddElement(index) } }>
                  <ElementWrap
                    active={selectedItems.includes(index)}>
                  {index}
                  </ElementWrap>
                </div>
                ),
              )}
            </ElementsListWrap>
            current selected items:
            <SelectedElements selectedItems={selectedItems} />
            <span><Button>Save</Button></span>
            <span><Button>Cancel</Button></span>
          </ListWrap>
        </WidgetWrap>
      </Container>
    )
  }
}
const mapStateToProps = (state) => ({
  selectedItems: state.selectedItems,
  itemsToShow: state.itemsToShow,
})

export default connect(mapStateToProps, actionCreators)(Task3)
