import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Colors} from '../../utils/colors';
import {People} from '../../mobx/dto/people';
import {RootStackParamList} from '../navigator/types';
import {StackScreenProps} from '@react-navigation/stack';
import {NavigatorConstants} from '../../utils/navigator-constants';
import {ButtonText} from '../common/button/ButtonText';

export interface PeopleScreenParams {
  people: People;
}

export const PeopleScreen = ({
  route,
}: StackScreenProps<RootStackParamList, NavigatorConstants.PEOPLE_SCREEN>) => {
  const people = route.params?.people;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrapper}>
        <Text style={styles.bigText}>{people.getName()}</Text>
        <Text style={styles.bigText}>{people.getCreated()}</Text>
        <Text style={styles.bigText}>{people.getFilms()}</Text>
        <Text style={styles.bigText}>{people.getGender()}</Text>
        <Text style={styles.bigText}>{people.getEdited()}</Text>
      </View>
      <ButtonText
        text={'GoBake'}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.FFFFFF,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainWrapper: {
    paddingHorizontal: 20,
    marginVertical: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigText: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 24,
    color: Colors.B3B3B3,
  },
});
