import { useRouter } from 'next/router';
import React, { FC, ReactNode, useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { media } from '../../styles';

const transitionZoom = keyframes`
  0% {
    transform:scale(1);
  }
  30% {
    transform:scale(.5);
  }
  70% {
    transform:scale(.5);
  }
  100% {
    transform:scale(1);
  }
`;

const transitionSlideLeft = keyframes`
  from {
    transform:translateX(0);
  }
  to {
    transform: translateX(-100vw);
  }
`;
const transitionSlideRight = keyframes`
 from {
    transform:translateX(100vw);
  }
  to {
    transform: translateX(0);
  }
`;

const MainComponent = styled.div<{ routingPageOffset: number }>`
  &.page-enter-active,
  &.page-exit-active {
    .page-transition-inner {
      height: 100vh;
      overflow: hidden;
      animation: 1000ms ${transitionZoom} cubic-bezier(0.45, 0, 0.55, 1) both;
      background: white;
      border-radius: 4.8rem;

      ${media.tablet} {
        border-radius: 7.2rem;
      }

      ${media.desktop} {
        border-radius: 9.6rem;
        margin-bottom: 60rem;
      }
    }
  }

  &.page-enter {
  }

  &.page-exit {
  }

  &.page-exit-active {
    position: relative;
    animation: 500ms ${transitionSlideLeft} 250ms cubic-bezier(0.37, 0, 0.63, 1)
      both;
    opacity: 1;
    backface-visibility: hidden;
    z-index: 4;

    main {
      transform: translateY(-${(props) => props.routingPageOffset}px);
    }
  }

  &.page-enter-active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0.5;
    animation: 500ms ${transitionSlideRight} 250ms
      cubic-bezier(0.37, 0, 0.63, 1) both;
    backface-visibility: hidden;
  }

  &.page-exit-done {
    opacity: 0;
  }

  &.page-enter-done {
    opacity: 1;
  }
`;

const SecondaryComponent = styled.div`
  position: relative;
`;

const PageTransitions: FC<{ children: ReactNode }> = ({ children }) => {
  const [routingPageOffset, setRoutingPageOffset] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const router = useRouter();

  const playTransition = () => {
    setTransitioning(true);
  };

  const stopTransition = () => {
    setTransitioning(false);
  };

  useEffect(() => {
    const pageChange = () => {
      setRoutingPageOffset(window.scrollY);
    };
    router.events.on('routeChangeStart', pageChange);
  }, [router.events]);
  return (
    <>
      <TransitionGroup
        className={transitioning ? 'transition active' : 'transition'}
      >
        <CSSTransition
          key={router.asPath}
          classNames='page'
          timeout={1000}
          onEntering={playTransition}
          onExited={stopTransition}
        >
          <MainComponent routingPageOffset={routingPageOffset}>
            <SecondaryComponent className='page-transition-inner'>
              {children}
            </SecondaryComponent>
          </MainComponent>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default PageTransitions;
