import React, {useState} from 'react';
import styled from 'styled-components/native';
import {View, Text, SafeAreaView} from 'react-native';
import {FlexView} from '../../tools/FlexView';
import {CustomText} from '../../tools/CustomText';
import MonthYear from '../../component/calendar/MonthYear/MonthYear';
import {eachWeekOfInterval, subDays, addDays} from 'date-fns';
import MonthDate from '../../component/calendar/dates/MonthDate';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const month = date.toLocaleString('en-us', {month: 'short'});
  const year = date.getFullYear();
  const [selectedDate, setSelectedDate] = useState(date);

  return (
    <Container>
      <MonthYear date={date} setDate={setDate} month={month} year={year} />

      <MonthDate
        date={date}
        setDate={setDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export default Calendar;
