import styled, { css } from "styled-components";

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'violet',
    secondary: 'yellow',
    danger: 'green',
    success: 'red',
    warning: 'orange',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
width: 100px; 
height: 100px;
border-radius: 8px;
border: 0;
margin: 8px;
justify-content: space-between;

background-color: ${props => props.theme['green-500']};
color: ${props => props.theme.white};

/* ${props => {
        return css`
    background-color: ${buttonVariants[props.variant]}
    `
    }} */

`