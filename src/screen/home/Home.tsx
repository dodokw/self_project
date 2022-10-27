import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import {FlexView} from '../../tools/FlexView';
import {CustomText} from '../../tools/CustomText';

const Home = () => {
  return (
    <FlexView>
      <Container></Container>
    </FlexView>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export default Home;
