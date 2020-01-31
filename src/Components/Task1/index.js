import React from 'react'
import styled from 'styled-components'
import * as palette from '../../variables'

const Wrap = styled.div`
  max-width: 600px;
  width: 100%;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
`

const Cell = styled.div`
  display: flex;
  flex: 100%;
  padding: 5px 0;
`

const SearchWrap = styled.div`
  display: flex;
  width: 100%;
`

const Input = styled.input`
  display: flex;
  flex: 1;
  height: 40px;
  padding: 0 10px 0 50px;
  margin: 0 10px 0 0;
  outline: 0;
  border: 0;
  width: 100%;
  background: #fff;
`

const Button = styled.button`
  padding: 0;
  margin: 0;
  outlin: 0;
  border: 0;
  background: ${palette.lighterGrey};
  padding: 0 10px;
  text-transform: uppercase;
`

const Label = styled.label`
  position: relative;
  display: flex;
  width: 100%;
  &:before {
    content: "";
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 20px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E") center / contain no-repeat;
  }
`


const Search = styled.form`
  width: 100%;
  position: relative;
  margin: 5px 0 0 0;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-family: 'FontAwesome';
    content: '\f002';
    background: $color;
    text-align: center;
    color: $iconColor;
    border-radius: 5px;
    -webkit-font-smoothing: subpixel-antialiased;
    font-smooth: always;
  }
}
`

const SearchTerm = styled.input`
  width: 100%;
  padding: 0 10px 0 50px;
  border: 0;
  height: 40px;
  outline: none;
}`

const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  margin: 0;
  outlin: 0;
  border: 0;
  width: auto;
  border-left: 10px solid #f2f2f2;
  height: 40px;
  background: ${palette.lighterGrey};
  padding: 0 10px;
  text-transform: uppercase;
  cursor: pointer;
}`

export default class Task1 extends React.Component {
  render() {
    return (
      <Wrap>
        <Grid>
          <Cell>
            <SearchWrap>
              <Label>
                <Input
                  placeholder="some placeholder"
                />
              </Label>
            </SearchWrap>
            <Button>search</Button>
          </Cell>
          <Cell>
            <SearchWrap>
              <Label>
                <Input
                  placeholder="why"
                />
              </Label>
            </SearchWrap>
            <Button>
              go
            </Button>
          </Cell>
        </Grid>
        <Search>
          <SearchTerm placeholder="some placeholder" />
          <SearchButton type="submit">Search</SearchButton>
        </Search>
        <Search style={{ margin: '10px 0 0 0' }}>
          <SearchTerm placeholder="why" />
          <SearchButton type="submit">Go</SearchButton>
        </Search>
      </Wrap>
    )
  }
}
