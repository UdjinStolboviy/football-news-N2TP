import React, {useEffect, useState} from 'react';
import {Button, Card, Icon} from '@rneui/themed';
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
    <Card containerStyle={{borderRadius: 20}}>
      <Card.Title>{people.getName()}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={{padding: 0}}
        resizeMode="contain"
        source={require('../../../assets/img/sword.jpeg')}
      />
      <ButtonLike onPress={onPressLike} favorie={favorite} />
      <Text
        style={{
          margin: 20,
          width: 200,
        }}>{`Gender: ${people.getGender()}`}</Text>

      <Button
        onPress={() =>
          // @ts-ignore
          navigation.navigate(NavigatorConstants.PEOPLE_SCREEN, {
            people: people,
          })
        }
        icon={
          <Icon
            name="code"
            color="#ffffff"
            iconStyle={{marginRight: 10}}
            // onPress={}
          />
        }
        buttonStyle={{
          borderRadius: 10,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="VIEW"
      />
    </Card>
  );
});
