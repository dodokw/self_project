import React from 'react';
import styled from 'styled-components/native';

type FlexViewProps = {
  flex?: number;
};
/**
 * @flex number
 */
export const FlexView = styled.View<FlexViewProps>`
  flex: ${props => props.flex || 1};
  background-color: #fff;
`;
