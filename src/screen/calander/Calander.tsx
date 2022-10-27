import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import {FlexView} from '../../tools/FlexView';
import {CustomText} from '../../tools/CustomText';

const Calander = () => {
  return (
    <FlexView>
      <Container>
        <CustomText>Calander</CustomText>
      </Container>
    </FlexView>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export default Calander;
