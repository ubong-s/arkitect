import Link from 'next/link';
import React, { FC } from 'react';
import styled from 'styled-components';
import { media, typography } from '../../styles';
import { Container } from '../_ui';
import Button from './Button';

const CallToActionRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  text-align: center;
  max-width: 100rem;
  margin: auto;
  padding: 5rem 0;

  span {
    text-transform: uppercase;
    font-weight: ${typography.weight.medium};
    letter-spacing: 1px;
  }

  ${media.tablet} {
    padding: 10rem 0;
    gap: 3.2rem;
  }

  ${media.desktop} {
    padding: 19rem 0;
    gap: 3.6rem 0 4.8rem;
  }
`;

const CallToAction: FC<{
  title: string;
  subtitle: string;
  button: {
    text: string;
    link: string;
  };
}> = ({ title, subtitle, button }) => {
  return (
    <Container>
      <CallToActionRoot>
        <span>{subtitle}</span>
        <h2>{title}</h2>
        <Link href={button.link}>
          <Button type='button' variant='primary' text={button.text} />
        </Link>
      </CallToActionRoot>
    </Container>
  );
};

export default CallToAction;
