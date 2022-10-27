import React, {FC, useEffect} from 'react';
import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import {eachWeekOfInterval, subDays, addDays} from 'date-fns';
import {hp, wp} from '../../../tools/UI';
import {MonthDatesProps} from './Type';

const MonthDate: FC<MonthDatesProps> = ({
  date,
  selectedDate,
  setSelectedDate,
}) => {
  const weekName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const dates = eachWeekOfInterval(
    {
      start: new Date(date.getFullYear(), date.getMonth(), 1),
      end: new Date(date.getFullYear(), date.getMonth() + 1, 0),
    },
    {
      weekStartsOn: 0,
    },
  ).reduce((acc: any, cur) => {
    return [
      ...acc,
      ...Array(7)
        .fill(0)
        .map((_, i) => addDays(cur, i)),
    ];
  }, []);
  //   console.log('dates', dates);

  const weeks = dates.reduce((acc: any, cur: any, i: number) => {
    if (i % 7 === 0) {
      return [...acc, [cur]];
    } else {
      const last = acc[acc.length - 1];
      return [...acc.slice(0, acc.length - 1), [...last, cur]];
    }
  }, []);

  useEffect(() => {
    setSelectedDate(date.toDateString());
  }, []);

  return (
    <Container>
      <Wrap>
        {weekName.map((item, index) => (
          <WeekView key={index}>
            <WeekText index={index}>{item}</WeekText>
          </WeekView>
        ))}
      </Wrap>
      {weeks.map((week: any, i: number) => (
        <Wrap key={i}>
          {week.map((item: any, i: number) => (
            <DateView
              key={i}
              onPress={() => setSelectedDate(item.toDateString())}
              disabled={item.getMonth() !== date.getMonth()}>
              <DateText textDate={item.getMonth()} date={date.getMonth()}>
                {item.getDate()}
              </DateText>
              {item.toDateString() === selectedDate && <Circle />}
            </DateView>
          ))}
        </Wrap>
      ))}
    </Container>
  );
};

export default MonthDate;

const Container = styled.View``;
const Wrap = styled.View`
  flex-direction: row;
`;
const WeekView = styled.View`
  width: ${wp(54)};
  height: ${hp(50)};
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;
const WeekText = styled.Text<any>`
  font-size: ${hp(15)};
  color: ${props =>
    props.index === 0 ? 'red' : props.index === 6 ? 'blue' : '#000'};
`;
const DateView = styled.TouchableOpacity`
  width: ${wp(54)};
  height: ${hp(50)};
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;
const DateText = styled.Text<any>`
  color: ${props => (props.textDate === props.date ? '#000' : '#ccc')};
  font-size: ${hp(15)};
`;
const Circle = styled.View`
  width: ${wp(30)};
  height: ${hp(30)};
  border-radius: ${hp(50)};
  background-color: #fff;
  position: absolute;
  aspect-ratio: 1;
  border-width: 1px;
  border-color: blue;
  z-index: -1;
`;
