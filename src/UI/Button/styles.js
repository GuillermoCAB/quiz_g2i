import styled from 'styled-components';

export const Container = styled.button`
  width: ${p => p.width || 'auto'};
  min-width: 300px;
  max-width: 90%;
  height: ${p => p.height || 'auto'};
  margin: ${p => p.margin || '0'};

  display: ${p => p.display || 'flex'};
  justify-content: ${p => p.justify || 'center'};
  align-items: ${p => p.align || 'center'};
  padding: ${p => p.padding || '6px 20px'};

  background-color: ${p => p.bgColor || p.theme.buttonColor};
  border-radius: ${p => p.radius || '6px'};
  border: ${p => p.border || 'none'};
  box-shadow: ${p => p.shadow || p.theme.shadow}; 

  text-align: ${p => p.textAlign || '0'};
  font: ${p => p.weight || 'normal'} ${p => p.size || '20px/24px'} Nunito;
  color: ${p => p.color || p.theme.buttonTextColor};
  text-transform: uppercase;

  img {
    height: 24px;
  }
`;

