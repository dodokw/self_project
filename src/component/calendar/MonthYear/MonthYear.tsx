import React, {useState, FC} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import {CustomText} from '../../../tools/CustomText';
import {hp, wp} from '../../../tools/UI';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {MonthYearProps} from './Type';

const MonthYear: FC<MonthYearProps> = ({date, setDate, month, year}) => {
  const decreaseMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)));
  };
  const AddMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  };

  return (
    <Container>
      <LeftButton onPress={decreaseMonth}>
        <FontAwesome name="angle-left" size={hp(30)} color="blue" />
      </LeftButton>
      <Wrap>
        <CustomText style={{marginRight: wp(5)}}>{month}</CustomText>
        <CustomText>{year}</CustomText>
      </Wrap>
      <RightButton onPress={AddMonth}>
        <FontAwesome name="angle-right" size={hp(30)} color="blue" />
      </RightButton>
    </Container>
  );
};

const Container = styled.View`
  margin-left: ${wp(20)};
  margin-right: ${wp(20)};
  height: ${hp(50)};
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.View`
  flex-direction: row;
`;
const LeftButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;
const RightButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export default MonthYear;
