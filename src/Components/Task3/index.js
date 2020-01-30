import React from 'react'
import PropTypes from 'prop-types'
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
  text-align: left;
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

const SearchFilterText = styled.div`
  display: flex;
  text-align: left;
  align-items: start;
  margin-top: 7px;
  padding: 0 10px 0 0;
`

const SearchOption = styled.div`
  display: flex;
  flex: 1;
`

const ElementWrap = styled.div`
  text-align: left;
  padding: 5px 0 5px 20px;
  cursor: pointer;
  text-transform: capitalize;
  ${({ active }) => active && `
    background: ${palette.darkGreen};
  `}
`

const SearchBar = styled.div`
  padding: 0 0 20px 0;
  justify-items: start;
  flex: auto;
`

const FilterOption = styled.div`
  display: flex;
  flex; 1;
`

const Form = styled.form`
  padding: 0;
  margin: 0;
  display: inline;
`

const filledArray = [...Array(301)].map((_, i) => `element ${i}`)

class Task3 extends React.Component {
  state = {
    searchValue: '',
    showList: 'false',
  }

  componentDidMount() {
    const { addItem, selectedItems } = this.props
    if (selectedItems.length <= 2) {
    addItem(filledArray[0])
    addItem(filledArray[1])
    addItem(filledArray[2])
    }
  }

  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value })
  }

  handleAddElement = (item) => {
    const { addItem, addChangedItem, removeItem, selectedItems, } = this.props
    selectedItems.includes(item) ? removeItem(item) : selectedItems.length <= 2 && addItem(item)
  }

  handleShowList = () => {
    this.setState((prevState) => ({
      showList: !prevState.showList,
    }))
  }

  render() {
    const { addItem, changedItems, clearItems, itemsToShow, removeItem, removeChangedItem, selectedItems } = this.props
    const { searchValue, showList } = this.state
   
    return (
      <Container>
        <WidgetWrap>
          <H2>Select Items</H2>
          <H3>
            You currently have&nbsp;
            {selectedItems.length}
            &nbsp;selected items
          </H3>
          {console.log(showList)}
          <SelectedElements selectedItems={selectedItems} removeItem={removeItem} />
          <Button onClick={this.handleShowList}>change</Button>
          {showList
          &&
          <ListWrap>
            <H3>
              Select Items
            </H3>
            <SearchFilterWrap>
              <SearchOption>
                <SearchFilterText>
                Search
                </SearchFilterText>
                <SearchBar>
                  <Form>
                    <input
                      name="text"
                      type="text"
                      onChange={(event) => this.handleOnChange(event)}
                      value={searchValue}
                    />
                  </Form>
                </SearchBar>
              </SearchOption>
              <FilterOption>
                <SearchFilterText>
                  Filter
                </SearchFilterText>
                <Filter />
              </FilterOption>
            </SearchFilterWrap>
            <ElementsListWrap>
              {filledArray.slice(0, itemsToShow !== 'all' ? itemsToShow : filledArray.length)
              .filter((item) => new RegExp(`^${searchValue.toLowerCase()}`).test(item))
              .map((item, index) => (
                <div
                  key={item}
                  tabIndex={index}
                  onClick={ () => { this.handleAddElement(item) } }
                  role="link"
                  onKeyDown={ () => { this.handleAddElement(item) } }
                >
                  {console.log(selectedItems.length)}
                  <ElementWrap
                    active={selectedItems.includes(item)}>
                    <input type="checkbox" disabled={selectedItems.length === 2} />{item}
                  </ElementWrap>
                </div>
                ),
              )}
            </ElementsListWrap>
            {console.log(changedItems)}
            <SelectedElements selectedItems={selectedItems} removeItem={removeItem} />
            <Button onClick={() => addItem()}>save</Button>
            <Button onClick={this.handleShowList}>cancel</Button>
          </ListWrap>
          }
        </WidgetWrap>
      </Container>
    )
  }
}

// Task3.propTypes = {
//   addItem: PropTypes.func.isRequired,
//   clearItems: PropTypes.func.isRequired,
//   itemsToShow: PropTypes.string,
//   removeItem: PropTypes.func.isRequired,
//   selectedItems: PropTypes.array,
// }

// Task3.defaultProps = {
//   selectedItems: [],
// }

const mapStateToProps = (state) => ({
  changedItems: state.changedItems,
  itemsToShow: state.itemsToShow,
  selectedItems: state.selectedItems,
})

export default connect(mapStateToProps, actionCreators)(Task3)
