import React from 'react';

import { Container, ItemsWrapper, NavItem, Wrapper, Title } from './styles';

const tabsValues = {
  aboutUs: { link: 'http://www.recipepuppy.com/', text: 'About us' },
  blog: { link: 'http://blog.recipepuppy.com/', text: 'Blog' },
  contact: { link: 'http://www.recipepuppy.com/about/contact', text: 'Contact' },
};

const Navbar = () => {
  const renderNavigationTabs = () => {
    return Object.keys(tabsValues).map(key => {
      return (
        <NavItem key={tabsValues[key].link} href={tabsValues[key].link} target="_blank">
          {tabsValues[key].text}
        </NavItem>
      );
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title> Recipies APP</Title>
        <ItemsWrapper>{renderNavigationTabs()}</ItemsWrapper>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
