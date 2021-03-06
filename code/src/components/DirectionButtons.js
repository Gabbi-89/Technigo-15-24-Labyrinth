import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

// ----------------------------------------------------------------

export const DirectionButtons = ({ direction, action }) => {
  const dispatch = useDispatch();
  return (
    <DirectionButton
      onClick={(event) => dispatch(action(event))}
      direction={direction}
    >
      <Arrow role="img" aria-label={direction + `-arrow`} direction={direction}>
        ➤
      </Arrow>
      <DirectionText direction={direction}>Go {direction}</DirectionText>
    </DirectionButton>
  );
};

// ----------------------------------------------------------------

const Arrow = styled.span`
  display: inline-block;
  font-size: 30px;
  color: #fff;
  transform: ${(props) =>
    props.direction === 'North'
      ? `rotate(-90deg)`
      : props.direction === 'East'
      ? `rotate(0deg)`
      : props.direction === 'South'
      ? `rotate(90deg)`
      : `rotate(180deg)`};
  margin-top: ${(props) => (props.direction === 'South' ? '10px' : '')};
  margin-bottom: ${(props) => (props.direction === 'North' ? '10px' : '')};

  @media (min-width: 580px) {
    font-size: 45px;
  }
`;

const DirectionButton = styled.button`
  z-index: 2;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  position: fixed;
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'East'
      ? 'row-reverse'
      : props.direction === 'West'
      ? 'row'
      : props.direction === 'North'
      ? 'column'
      : 'column-reverse'};
  align-items: center;
  justify-content: center;
  transform: translateY(-50%); // To center vertically
  top: ${(props) =>
    props.direction === 'North'
      ? '70px'
      : props.direction === 'East' || props.direction === 'West'
      ? '50%'
      : ''};
  bottom: ${(props) => (props.direction === 'South' ? '20px' : '')};
  left: ${(props) => (props.direction === 'West' ? '20px' : '')};
  right: ${(props) => (props.direction === 'East' ? '20px' : '')};

  &:hover {
    cursor: pointer;
  }
`;

const DirectionText = styled.p`
  display: none;
  transform: ${(props) =>
    props.direction === 'East'
      ? 'rotate(90deg)'
      : props.direction === 'West'
      ? 'rotate(-90deg)'
      : ''};
  color: #fff;
  @media (min-width: 490px) {
    display: block;
  }
`;
