import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        // href="https://etherscan.io/address/0xc2edad668740f1aa35e4d8f227fb8e17dca888cd#code"
        // href="https://etherscan.io/address/0xa0fd402bacd5fa935f4acfede486ac32c87d3b9d#code"
        href="https://etherscan.io/address/0x2a0f367384dbb0b36037872a0ac2749f80098734#code"
      >
        KbarSwap Contract
      </StyledLink>
      {/* <StyledLink
        target="_blank"
        // href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433"
        href="https://uniswap.info/pair/0x451c2220a761dc5759e5c6d17bd28a568318a26b"
      >
        Uniswap KBAR-ETH
      </StyledLink> */}
      <StyledLink target="_blank" href="https://discord.gg/hJ2p555">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/sushiswap">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/sushiswap">
        Medium
      </StyledLink>
      <StyledLink target="_blank" href="#">
        Kakao
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
