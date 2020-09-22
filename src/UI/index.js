import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  width: 100vw;
  max-height: 900px;
  height: 100vh;
  margin: auto;

  display: flex;
  flex-direction: ${p => p.direction || 'column'};
  justify-content: ${p => p.justify || 'flex-start'};
  align-items: ${p => p.align || 'center'};
  padding: 20px;
`;

export const Title = styled.p`
  height: ${p => p.height || 'auto'};
  width: ${p => p.width || '180px'};
  margin: ${p => p.margin || '0'};

  text-align: ${p => p.align || '0'};
  font: ${p => p.weight || 'normal'} ${p => p.size || '24px/26px'} Nunito;
  color: ${p => p.color || p.theme.textColor};
  word-break: break-word;

  @media only screen and (min-width: 1200px) {
    font: ${p => p.weight || 'normal'} ${p => p.size || '34px/36px'} Nunito;
    width: ${p => p.width || '340px'};
  }
`;

export const Text = styled.p`
  height: ${p => p.height || 'auto'};
  width: ${p => p.width || '100%'};
  margin: ${p => p.margin || '0'};

  text-align: ${p => p.align || '0'};
  font: ${p => p.weight || 'normal'} ${p => p.size || '22px/24px'} Nunito;
  color: ${p => p.color || p.theme.textColor};
  word-break: break-word;
`;

export const RoundButton = styled.button`
  width: ${p => p.width || '100px'};
  height: ${p => p.height || '30px'};
  margin: ${p => p.margin || '0'};

  display: ${p => p.display || 'flex'};
  justify-content: ${p => p.justify || 'center'};
  align-items: ${p => p.align || 'center'};
  padding: ${p => p.padding || '6px'};

  background-color: ${p => p.bgColor || p.theme.buttonColor};
  border-radius: ${p => p.radius || '12px'};
  border: ${p => p.border || 'none'};
  box-shadow: ${p => p.shadow || p.theme.shadow}; 

  text-align: ${p => p.align || '0'};
  font: ${p => p.weight || 'normal'} ${p => p.size || '20px/24px'} Nunito;
  color: ${p => p.color || p.theme.buttonTextColor};
  text-transform: uppercase;
`;

export const Card = styled.div`
  width: ${p => p.width || 'auto'};
  height: ${p => p.height || 'auto'};
  margin: ${p => p.margin || '5%'};

  display: ${p => p.display || 'flex'};
  justify-content: ${p => p.justify || 'center'};
  align-items: ${p => p.align || 'center'};
  padding: ${p => p.padding || '5%'};

  background-color: ${p => p.bgColor || '#00000030'};
  border-radius: ${p => p.radius || '6px'};
  border: ${p => p.border || '1px solid' + p.theme.textColor};
  box-shadow: ${p => p.shadow || p.theme.shadow}; 
`;

export const Column = styled.div`
  width: ${p => p.width || 'auto'};
  height: ${p => p.height || 'auto'};
  margin: ${p => p.margin || '0'};
  overflow-y: ${p => p.overflowY};

  display: ${p => p.display || 'flex'};
  flex-direction: column;
  justify-content: ${p => p.justify || 'center'};
  align-items: ${p => p.align || 'center'};
  padding: ${p => p.padding || '0'};
`;

export const Row = styled.div`
  width: ${p => p.width || 'auto'};
  height: ${p => p.height || 'auto'};
  margin: ${p => p.margin || '0'};
  overflow-y: ${p => p.overflowY};

  display: ${p => p.display || 'flex'};
  justify-content: ${p => p.justify || 'center'};
  align-items: ${p => p.align || 'center'};
`;

export const Image = styled.img`
  width: ${p => p.width || 'auto'};
  height: ${p => p.height || 'auto'};
  margin: ${p => p.margin || '0'};

  opacity: 0.7;
`;







