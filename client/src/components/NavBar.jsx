import React from 'react'
import styled from 'styled-components'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

const Container = styled.div`
  height: 60px;
  color: black;
  background-color: rgba(255, 228, 214, 0.9);
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <SearchRoundedIcon></SearchRoundedIcon>
          </SearchContainer>
        </Left>
        <Center>CENTER</Center>
        <Right>RIGHT</Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar
