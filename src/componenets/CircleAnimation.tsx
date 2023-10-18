import styled, { keyframes } from 'styled-components';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Skill } from './About';

type Props = {
  items: Skill[];
  title: string;
};

type CircleProps = {
  items: Skill[];
  size: number;
};

export default function CircleAnimation({ title, items }: Props) {
  const ref = useRef() as MutableRefObject<HTMLUListElement>;
  const [size, setSize] = useState<number>(0);

  useEffect(() => {
    setSize(ref.current.offsetWidth);

    const getSize = () => {
      setSize(ref.current.offsetWidth);
    };

    window.addEventListener('resize', getSize);

    return () => window.removeEventListener('resize', getSize);
  }, []);

  return (
    <div className='group flex items-center justify-center relative w-full h-auto aspect-[1/1] cursor-pointer'>
      <Circle items={items} size={size} ref={ref}>
        {items.map((item) => (
          <li key={item.name} className='bg-slate-300'>
            <img src={item.icon} />
          </li>
        ))}
      </Circle>
      <div className='opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible absolute inset-0 bg-[rgba(0,0,0,0.9)] rounded-xl'>
        <div className='flex flex-col items-center justify-center w-full h-full'>
          <h3 className='text-md font-bold'>{title}</h3>
          <ul className='mt-2'>
            {items.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const circleRotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

const imageRotate = keyframes`
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
`;

const Circle = styled.ul<CircleProps>`
  position: relative;
  width: 50%;
  height: 50%;
  /* border: 3px solid #6495f2; */
  border-radius: 50%;
  animation: ${circleRotate} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  &:hover li > img {
    animation-play-state: paused;
  }

  & > li {
    width: 56px;
    height: 56px;
    position: absolute;
    border-radius: 50%;
    /* background-color: white; */
    padding: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    margin: -28px;

    & > img {
      animation: ${imageRotate} 20s linear infinite;
      object-fit: contain;
      width: 90%;
      height: 90%;
    }

    ${({ items, size }) => {
      const angle = 360 / items.length;
      let rotation = 0;
      let result = ``;

      items.forEach((_, index) => {
        result += `
          &:nth-child(${index + 1}){
            transform: rotate(${rotation * 1}deg) translate(${
              size / 2
            }px ) rotate(${rotation * -1}deg)
          }
        `;
        rotation += angle;
      });

      return result;
    }}
  }
`;
