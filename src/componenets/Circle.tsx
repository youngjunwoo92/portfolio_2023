import styled, { keyframes } from 'styled-components';

import { javascript } from '../assets';

export default function Circle() {
  return (
    <div className='flex gap-4 w-full aspect-square'>
      <Layout className='bg-white relative mb-auto max-w-full w-full h-auto aspect-[1/1]'>
        {/* <BigCircle>
        <IconContainer>
          <img src={javascript} />
        </IconContainer>
        <IconContainer>
          <img src={javascript} />
        </IconContainer>
        <IconContainer>
          <img src={javascript} />
        </IconContainer>
        <IconContainer>
          <img src={javascript} />
        </IconContainer>
      </BigCircle> */}
        <SmallCircle>
          <SmallCircleIconContainer>
            <img src={javascript} />
          </SmallCircleIconContainer>
          <SmallCircleIconContainer>
            <img src={javascript} />
          </SmallCircleIconContainer>
          <SmallCircleIconContainer>
            <img src={javascript} />
          </SmallCircleIconContainer>
          <SmallCircleIconContainer>
            <img src={javascript} />
          </SmallCircleIconContainer>
        </SmallCircle>
      </Layout>
      <Layout className='bg-white relative mb-auto max-w-full w-full h-auto aspect-[1/1]'></Layout>
    </div>
  );
}

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

const rotateReverse = keyframes`
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
`;

const circleRotate = keyframes`
    from {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(405deg);
    }
`;

const imageRotate = keyframes`
    from {
      transform: rotate(-45deg);
    }
    to {
      transform: rotate(-405deg);
    }
`;

const BigCircle = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border: 3px solid #6495f2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 20s linear infinite;
`;

const IconContainer = styled.div`
  width: 64px;
  height: 64px;
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, #4967e6 0%, #627bf4 100%);
  box-shadow: 0 2px 4px 0 #3e5ada;

  &:hover ${BigCircle} {
    animation-play-state: paused;
  }

  &:hover {
    animation-play-state: paused;
  }

  & > img {
    margin: 0px auto;
    width: 86%;
    animation: ${rotateReverse} 20s linear infinite;
  }

  &:first-child {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:nth-child(2) {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
  &:nth-child(3) {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  &:nth-child(4) {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }

  &:hover {
  }
`;

const SmallCircle = styled.div`
  animation: ${circleRotate} 20s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 60%;
  height: 60%;
  border: 3px solid #6495f2;
  border-radius: 50%;
`;

const SmallCircleIconContainer = styled(IconContainer)`
  &:hover ${SmallCircle} {
    animation-play-state: paused;
  }
  & > img {
    animation: ${imageRotate} 20s linear infinite;
  }
`;

const Layout = styled.div``;
