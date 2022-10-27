import {NavigationProps} from '../navigation/NavigationProps';

//전체 스크린 리스트
export enum AllScreenList {
  //홈
  Home = 'HomeScreen',

  //캘린더
  Calander = 'CalanderScreen',

  //라이브러리
  Library = 'LibraryScreen',

  //마이페이지
  Mypage = 'MyPageScreen',
}

export type HomeScreenParamList = {
  [AllScreenList.Home]: {};
};

export type CalanderScreenParamList = {
  [AllScreenList.Calander]: {};
};

export type LibraryScreenParamList = {
  [AllScreenList.Library]: {};
};

export type MypageScreenParamList = {
  [AllScreenList.Mypage]: {};
};

export type HomeStackScreenProps<T extends keyof HomeScreenParamList> =
  NavigationProps & HomeScreenParamList[T];
export type CalanderStackScreenProps<T extends keyof CalanderScreenParamList> =
  NavigationProps & CalanderScreenParamList[T];
export type LibraryStackScreenProps<T extends keyof LibraryScreenParamList> =
  NavigationProps & LibraryScreenParamList[T];
export type MypageStackScreenProps<T extends keyof MypageScreenParamList> =
  NavigationProps & MypageScreenParamList[T];
