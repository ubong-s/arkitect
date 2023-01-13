import { FC, useRef } from 'react';
import styled, { css } from 'styled-components';
import { gsap } from 'gsap';
import { DefaultButton, media } from '../../styles';

const ButtonRoot = styled(DefaultButton)<{ type: string; variant: string }>`
  position: relative;
  padding: 1rem 2rem;

  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return css`
          border-color: ${(props) => props.theme.colors.default};
          background-color: ${(props) => props.theme.colors.default};
          color: ${(props) => props.theme.colors.white};
        `;
      case 'inverse':
        return css`
          border-color: ${(props) => props.theme.colors.white};
          background-color: ${(props) => props.theme.colors.white};
          color: ${(props) => props.theme.colors.default};
        `;
      default:
        return css`
          border-color: ${(props) => props.theme.colors.gray};
          background-color: transparent;
          color: ${(props) => props.theme.colors.default};

          &:hover {
            border-color: ${(props) => props.theme.colors.default};
            background-color: ${(props) => props.theme.colors.default};
            color: ${(props) => props.theme.colors.white};
          }
        `;
    }
  }}

  .button__inner {
    display: grid;
    align-items: flex-start;
    gap: 0;
    height: 20px;
    overflow: hidden;

    span {
      left: 0;
      height: 20px;
      width: 100%;
    }
  }

  ${media.tablet} {
    font-size: 1.6rem;
    padding: 2rem 3rem;
  }
`;

interface ButtonProps {
  text: string;
  type: 'reset' | 'submit' | 'button';
  variant: 'default' | 'primary' | 'inverse';
}

const Button: FC<ButtonProps> = ({
  text,
  variant = 'default',
  type = 'button',
}) => {
  const btnRef = useRef(null);

  const animateButtonEnter = () => {
    const q = gsap.utils.selector(btnRef.current);
    gsap.to(q('span'), {
      y: '-20px',
      ease: 'none',
      duration: 0.5,
    });
  };

  const animateButtonLeave = () => {
    const q = gsap.utils.selector(btnRef.current);
    gsap.to(q('span'), {
      y: '0',
      ease: 'none',
      duration: 0.5,
    });
  };

  return (
    <ButtonRoot
      ref={btnRef}
      onMouseEnter={animateButtonEnter}
      onMouseLeave={animateButtonLeave}
      type={type}
      variant={variant}
    >
      <div className='button__inner'>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </ButtonRoot>
  );
};

export default Button;
