import styled from 'styled-components';

const optionRow = {
  height: '40px',
  padding: '8px 16px',
  marginBottom: '2px',
  borderRadius: '4px',
};

export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: white;
  height: ${optionRow.height};
  padding: ${optionRow.padding};
  border-bottom: 1px solid ${optionRow.marginBottom};
  border-radius: ${optionRow.borderRadius};
`;

export const RecipieWrapper = styled.p`
  display: flex;
  flex-grow: 1;
  color: grey;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
