import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      {/* KbarSwap Contract  Github  Twitter  Medium   Telegram  Discord */}
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0x9a870977a81c9701ebb1ac089716935edb06e832#code"
      >
        KbarSwap Contract
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/kbarswap">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="#">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/kbarswap">
        Medium
      </StyledLink>
      <StyledLink target="_blank" href="#">
        Telegram
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/hJ2p555">
        Discord
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
