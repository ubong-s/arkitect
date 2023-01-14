import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { Button, Container } from '../components';
import { media } from '../styles';

const NotFoundRoot = styled.section`
  height: 100vh;
  background-image: url('/images/404-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;

const NotFoundInner = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  p {
    color: ${(props) => props.theme.colors.white};
  }

  h1 {
    text-transform: uppercase;
  }

  ${media.tablet} {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: 10rem 0;
  }
`;

const NotFound: FC<{}> = () => {
  return (
    <NotFoundRoot>
      <Container>
        <NotFoundInner>
          <div>
            <h1>
              <span>404</span>
              Error
            </h1>
            <p>
              The page you are looking for <br />
              cannot be found
            </p>
          </div>
          <Link href='/'>
            <Button text='Back to Homepage' type='button' variant='inverse' />
          </Link>
        </NotFoundInner>
      </Container>
    </NotFoundRoot>
  );
};

export default NotFound;
