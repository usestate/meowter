import { styled } from '@linaria/react';

import { COLOR, Z_INDEX } from 'ui/vars';

export const Container = styled.div<{ size: number }>`
  position: relative;
  top: 0;
  left: 0;
  z-index: ${Z_INDEX.LOADING};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: ${p => p.size}px;
  background: transparent;

  &[data-blocker] {
    position: absolute;

    background: rgba(var(${COLOR.BG}), 0.5);
  }
`;

export const Text = styled.p`
  color: var(${COLOR.TEXT}});
`;

export const Circular = styled.svg<{ size: number }>`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  transform: rotate(-90deg);
  stroke-linecap: round;
  stroke-width: 4;
  fill: none;
`;

export const Circle = styled.circle`
  stroke: var(${COLOR.ACCENT});
  stroke-dashoffset: 0;
  transform-origin: center;
  stroke-dasharray: 312;
  animation: circleRotate 1.7s linear infinite;
  opacity: 0.9;

  &[data-inverse-color] {
    stroke: var(${COLOR.BG});
  }

  @keyframes circleRotate {
    0% {
      stroke-dashoffset: 312;
      transform: rotate(70deg);
    }
    60% {
      stroke-dashoffset: -312;
    }
    100% {
      stroke-dashoffset: -312;
      transform: rotate(450deg);
    }
  }
`;
