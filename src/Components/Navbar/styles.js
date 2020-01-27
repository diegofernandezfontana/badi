import styled from 'styled-components';

import { palette, breakPoints, sizes } from '../../Styles/index';

const container = {
  bgColor: palette.blue.main,
  height: '60px',
  paddingLeft: '16px',
};

const navbar = {
  color: palette.white.main,
  sizes: {
    mobile: '100%',
    tablet: sizes.tablet,
    laptop: sizes.laptop,
  },
};
const navItems = {
  padding: '0px 8px',
};

export const Container = styled.div`
  background-color: ${container.bgColor};
  width: 100%;
  height: ${container.height};
  display: flex;
  align-items: center;
  padding-left: ${container.paddingLeft};
`;

export const Wrapper = styled.nav`
  width: ${navbar.sizes.mobile};
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media ${breakPoints.tablet} {
    width: ${navbar.sizes.tablet};
  }
  @media ${breakPoints.laptop} {
    width: ${navbar.sizes.laptop};
  }
`;

export const Title = styled.h2`
  margin: 0px;
  color: ${navbar.color};
`;

export const ItemsWrapper = styled.div`
  display: none;

  @media ${breakPoints.tablet} {
    display: flex;
  }
`;

export const NavItem = styled.a`
  color: white;
  text-decoration: none;
  padding: ${navItems.padding};

  &:hover {
    cursor: pointer;
  }
`;
