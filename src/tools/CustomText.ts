import styled from 'styled-components/native';
import {hp} from './UI';

type CustomTextProps = {
  color?: string;
  fontSize?: number;
  fontFamily?: string;
};

export const CustomText = styled.Text<CustomTextProps>`
  color: ${props => props.color || '#000'};
  font-size: ${props => props.fontSize || hp(20)}px;
  font-family ${props => props.fontFamily};
`;
