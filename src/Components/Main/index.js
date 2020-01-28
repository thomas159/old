import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import media from '../Reusable/media'
import Header from '../Header'
import Task1 from '../Task1'
import Task2 from '../Task2'
import Task3 from '../Task3'
import NotFound from '../NotFound'
import * as actionCreators from './actions'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Syncopate:700|Teko:400|Orbitron:400|Raleway:400');
* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

html,
body {
    position: relative;
    color: #474247;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 1.2;
    background: #f2f2f2;
    word-break: normal;
}

ul,li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.selected {
  color: #ff00ff;
}
`

const Wrap = styled.div`
  position: relative;
`

const MainWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  min-height: calc(100vh - 80px);
  ${media.lg`
    min-height: calc(100vh - 50px);
  `}
`

class Main extends React.Component {
  render() {
    const { selectedItems } = this.props
    return (
      <Wrap>
        <GlobalStyle whiteColor />
        <Header />
        <MainWrap>
          <Switch>
            <Route exact path="/">
              <Task1 />
            </Route>
            <Route path="/task2">
              <Task2 />
            </Route>
            <Route path="/task3">
              <Task3 selectedItems={selectedItems} />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </MainWrap>
      </Wrap>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedItems: state.selectedItems,
})

export default connect(mapStateToProps, actionCreators)(Main)
