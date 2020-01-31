import React from 'react'
import styled from 'styled-components'
import * as palette from '../../variables'
import media from '../Reusable/media'
import img from '../../images/right-arrow.png'
import { Menu } from '../../images'

const Wrap = styled.div`
  position: relative;
  color: white;
  border: none;
  width: 100%;
`

const OptionWrap = styled.ul`
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  height: auto;
  width: 100%;
  background: #f9f9f9;
  padding: 2px 0 0 0;
  ${({ active }) => active && `
    display: block; 
  `}
  ${media.lg`
    display: grid;
    position: relative;
    grid-template-columns: 33.333% 33.333% 33.333%;
    border-top: 0px solid #000;
    background: none;
  `}
`

const Option = styled.li`
  color: #000;
  cursor: pointer;
  ${media.lg`
  position: relative;
  display: flex;
  justify-content: center;
  border-top: 0px solid #000;
`}
`

const OptionButton = styled.button`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  cursor: pointer;
  padding: 5px 0 5px 40px;
  background: #fff;
  border-radius: 5px;
  text-transform: capitalize;
  font-size: ${palette.mediumFont};
`

const DesktopOptionButton = styled(OptionButton)`
  display: none;
  ${media.lg`
  display: flex;
  width: auto;
  font-weight: 400;
  padding: 5px 10px;
  `}
  ${({ active }) => active && `
  background: #707275;
  color: #fff;
    &:before{
      content: "";
      display: block;
      background-image: none;
    }
  `}
}
`

const MobileOptionButton = styled(OptionButton)`

  ${({ active }) => active && `
    font-weight: 700;
    &:before{
      content: "";
      display: block;
      background-image: url(${img});
      width: 24px;
      height: 8px;
      float: left;
      margin: 3px 5px 0 -30px;
    }
  `}
  ${media.lg`
    display: none;
  `}
}`

const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  text-align: left;
  padding: 0 0 0 10px;
  outline: 0;
  height: 30px;
  background: #fff;
  border: 0;
  text-transform: capitalize;
  font-size: ${palette.mediumFont};
  ${media.lg`
    display: none;
  `}
`

const StyledMenuWrap = styled.span`
  margin: 0 5px 0 0;
  cursor: pointer;
`

const data = ['world of tanks', 'world of warplanes', 'world of warships']

export default class Task2 extends React.Component {
  state = {
    show: false,
    selectedOption: '',
  }

  componentDidMount() {
    this.setState({
      selectedOption: data[0],
    })
  }

  handleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }))
  }

  handleSelect = (option) => {
    this.setState({
      selectedOption: option,
    })
  }

  render() {
    const { selectedOption, show } = this.state
    return (
      <Wrap>
        <StyledButton>
          <StyledMenuWrap onClick={this.handleShow}><Menu /></StyledMenuWrap>{selectedOption} 
        </StyledButton>
        <OptionWrap active={show === true}>
          {data.map((item) =>
            <Option key={item}>
              <MobileOptionButton
                onClick={() => { this.handleSelect(item); this.handleShow(false) }}
                active={selectedOption === item}
              >
                {item}
              </MobileOptionButton>
              <DesktopOptionButton
                onClick={() => { this.handleSelect(item); }}
                active={selectedOption === item}
              >
                {item}
              </DesktopOptionButton>
            </Option>,
          )}
        )
        </OptionWrap>
      </Wrap>
    )
  }
}
