import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  width: 300px;
  max-height: 100%;
  height: 600px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;

  background-color: ${p => p.theme.bgColor};
`;

export const Text = styled.p`
  width: ${p => p.width || '100%'};
  margin: ${p => p.margin || '0'};

  text-align: ${p => p.align || '0'};
  font: ${p => p.weight || 'normal'} ${p => p.size || '22px/24px'} Nunito;
  color: ${p => p.color || p.theme.textColor}
`;

export const Button = styled.button`
  width: ${p => p.width || '70px'};
  height: ${p => p.height || '40px'};
  margin: ${p => p.margin || '0'};

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.bgColor || 'transparent'};
  border-radius: ${p => p.radius || '0'};
  border: ${p => p.border || 'none'};

  text-align: ${p => p.align || '0'};
  font: ${p => p.weight || 'bold'} ${p => p.size || '20px/24px'} Nunito;
  color: ${p => p.color || p.theme.buttonColor};
  text-transform: uppercase;
`;

export const Card = styled.div`
  width: ${p => p.width || 'auto'};
  height: ${p => p.height || 'auto'};
  margin: ${p => p.margin || '0'};

  display: ${p => p.display || 'flex'};
  justify-content: ${p => p.justify || 'center'};
  align-items: ${p => p.align || 'center'};
  padding: ${p => p.padding || '10px'};

  background-color: ${p => p.bgColor || 'transparent'};
  border-radius: ${p => p.radius || '0'};
  border: ${p => p.border || '1px solid' + p.theme.textColor};
`;