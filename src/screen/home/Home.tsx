import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import {FlexView} from '../../tools/FlexView';
import {CustomText} from '../../tools/CustomText';
import {hp} from '../../tools/UI';

const Home = () => {
  return (
    <Container>
      <CustomText>Home</CustomText>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export default Home;
