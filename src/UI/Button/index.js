import React from 'react';

// IMAGES
import loader from '../../assets/loader.svg';

// STYLES
import { Container } from './styles';

function Button({children,
    width,
    height,
    margin,
    display,
    justify,
    align,
    padding,
    bgColor,
    radius,
    border,
    shadow,
    weight,
    color,
    onClick,
    isLoading
  }) {
  return <Container 
    children={children} 
    width={width} 
    height={height} 
    margin={margin} 
    display={display} 
    justify={justify} 
    align={align} 
    padding={padding} 
    bgColor={bgColor} 
    radius={radius} 
    border={border} 
    shadow={shadow} 
    weight={weight} 
    color={color}
    onClick={onClick}    
  >
    {isLoading ? <img src={loader} alt="loader_g2i_quiz"/> : children}
  </Container>;
}

export default Button;