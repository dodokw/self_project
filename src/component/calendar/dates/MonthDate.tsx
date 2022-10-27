import React, {FC, useEffect} from 'react';
import styled from 'styled-components/native';
import {FlatList, Text, View} from 'react-native';
import {eachWeekOfInterval, subDays, addDays, addMonths} from 'date-fns';
import {hp, wp} from '../../../tools/UI';
import {MonthDatesProps} from './Type';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
  runOnJS,
} from 'react-native-reanimated';

const MonthDate: FC<MonthDatesProps> = ({
  date,
  setDate,
  selectedDate,
  setSelectedDate,
}) => {
  const weekName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [valueCheck, setValueCheck] = React.useState(200);

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
  //달력 애니메이션 시작
  const y = useSharedValue(500);
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {y: number}
  >({
    onStart: (_, ctx: any) => {
      ctx.startY = y.value;
    },
    onActive: ({translationY}) => {
      y.value = translationY;
    },
  });

  const aniStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(
        y.value < 0
          ? 50
          : y.value < 100
          ? 100
          : y.value < 200
          ? 200
          : y.value < 300
          ? 300
          : y.value < 400
          ? 400
          : 500,
      ),
    };
  });
  useDerivedValue(() => {
    //   if (y.value < 0) {
    //     runOnJS(setValueCheck)(y.value);
    //   }
    if (y.value < 15 && y.value > -15) {
      runOnJS(setValueCheck)(y.value);
      console.log('asdas');
    }
    // if (y.value > -100) {
    //   console.log(y.value);
    // }
  });

  //달력 애니메이션 끝

  //flatlist ref
  const flatListRef = React.useRef<FlatList>(null);
  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({index: index, animated: true});
  };
  useEffect(() => {
    if (valueCheck < 0) {
      scrollToIndex(4);
    }
  }, [valueCheck]);
  return (
    <Container>
      <Wrap>
        {weekName.map((item, index) => (
          <WeekView key={index}>
            <WeekText index={index}>{item}</WeekText>
          </WeekView>
        ))}
      </Wrap>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[aniStyle, {overflow: 'hidden'}]}>
          {valueCheck > 0 ? (
            <View>
              {weeks.map((week: any, i: number) => (
                <Wrap key={i}>
                  {week.map((item: any, i: number) => (
                    <DateView
                      key={i}
                      onPress={() => setSelectedDate(item.toDateString())}
                      disabled={item.getMonth() !== date.getMonth()}>
                      <DateText
                        textDate={item.getMonth()}
                        date={date.getMonth()}>
                        {item.getDate()}
                      </DateText>
                      {item.toDateString() === selectedDate && <Circle />}
                    </DateView>
                  ))}
                </Wrap>
              ))}
            </View>
          ) : (
            <FlatList
              data={weeks}
              ref={flatListRef}
              renderItem={({item}) => (
                <>
                  {item.map((item: any, i: number) => (
                    <DateView
                      key={i}
                      onPress={() => setSelectedDate(item.toDateString())}
                      disabled={item.getMonth() !== date.getMonth()}>
                      <DateText
                        textDate={item.getMonth()}
                        date={date.getMonth()}>
                        {item.getDate()}
                      </DateText>
                      {item.toDateString() === selectedDate && <Circle />}
                    </DateView>
                  ))}
                </>
              )}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              onEndReached={() => {
                console.log('end');
                setDate(addMonths(date, 1));
              }}
              onScrollToIndexFailed={() => {
                setTimeout(() => {
                  flatListRef.current?.scrollToIndex({
                    index: 4,
                    animated: true,
                    viewOffset: wp(22),
                  });
                }, 500);
              }}
            />
          )}
        </Animated.View>
      </PanGestureHandler>
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
