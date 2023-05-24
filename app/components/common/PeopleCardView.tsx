import React, {useEffect, useState} from 'react';
import {People} from '../../mobx/dto/people';
import {Text} from 'react-native';
import {ButtonLike} from './button/ButtonLike';
import {observer} from 'mobx-react';
import {PeopleStorage} from '../../mobx/storage/sw-people-store';
import {useInjection} from 'inversify-react';
import {Types} from '../../ioc/types';
import {useNavigation} from '@react-navigation/native';
import {NavigatorConstants} from '../../utils/navigator-constants';

export interface PeopleCardViewProps {
  people: People;
}

export const PeopleCardView = observer(({people}: PeopleCardViewProps) => {
  const favorite = people.getFavorite();
  const navigation = useNavigation();
  const peopleStorege: PeopleStorage = useInjection(Types.PeopleStorage);

  const onPressLike = () => {
    people.setFavorite(!favorite);
    if (favorite) {
      if (people.getGender() === 'male') {
        peopleStorege.setMaleDiz();
      }
      if (people.getGender() === 'n/a') {
        peopleStorege.setOtherDiz();
      }
      if (people.getGender() === 'female') {
        peopleStorege.setFemaleDiz();
      }
      return;
    }
    if (people.getGender() === 'male') {
      peopleStorege.setMale();
    }
    if (people.getGender() === 'n/a') {
      peopleStorege.setOther();
    }
    if (people.getGender() === 'female') {
      peopleStorege.setFemale();
    }
  };

  return (
    <Text
      style={{
        margin: 20,
        width: 200,
      }}>{`Gender: ${people.getGender()}`}</Text>
  );
});
