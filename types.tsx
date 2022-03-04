/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Signin: any;
  Signup: any;
  SetupWizard: any;
  AddDogs: any;
  Dashboard: any;
  Welcome: any;
  UserAuthStart: any;
  AddParks: any;
  ViewDogs: any;
  ViewParks: any;
  CreateParkVisit: any;
  ParkVisitDetails: any;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  UserAuthStart: any;
  TabTwo: undefined;
  Signup: any;
  Signin: any;
  SetupWizard: any;
  Dashboard: any;
  Welcome: any;
  AddParks: any;
  ViewDogs: any;
  ViewParks: any;
  CreateParkVisit: any;
  ParkVisitDetails: any;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
