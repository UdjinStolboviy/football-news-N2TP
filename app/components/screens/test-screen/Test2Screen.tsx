import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';
import {Texts} from '../../../utils/texts';
import {useNavigation} from '@react-navigation/native';
import {InitializationService} from '../../../service/initializer/initialization-service';
import {useInjection} from 'inversify-react';
import {Types} from '../../../ioc/types';
import {InitializationStorage} from '../../../mobx/storage/initialization-storage';

import {Button, Card, Icon} from '@rneui/themed';
import {ApiService} from '../../../service/api/api';
import {observer} from 'mobx-react';
import {ButtonText} from '../../common/button/ButtonText';
import {InputView} from '../../common/input/InputView';

import {NavigatorConstants} from '../../../utils/navigator-constants';
import {PeopleStorage} from '../../../mobx/storage/sw-people-store';
import {ButtonLike} from '../../common/button/ButtonLike';
import {People} from '../../../mobx/dto/people';
import {PeopleCardView} from '../../common/PeopleCardView';
import {FansView} from '../../common/FansView';

export const Test2Screen = observer(() => {
  const [inputValues, setInputValues] = useState('');
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(false);

  const peopleStorege: PeopleStorage = useInjection(Types.PeopleStorage);

  const getDate = () => {
    peopleStorege.getDataPeoples();
  };

  useEffect(() => {
    if (inputValues) {
      peopleStorege.getSearchedPeoples(inputValues);
    }
  }, [inputValues]);

  useEffect(() => {
    getDate();
  }, []);

  const renderCard = (item: People, index: number) => {
    return <PeopleCardView people={item} key={item.getName()} />;
  };

  const paginationScreen = () => {
    if (onEndReachedCalledDuringMomentum) {
      return;
    }
    peopleStorege.getNextPagePeoples();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.mainWrapper}>
        <InputView
          value={inputValues}
          containerStyle={{width: '100%'}}
          placeholder={'Search'}
          onChange={values => setInputValues(values)}
        />
        <View style={styles.wrapperFans}>
          <FansView
            textCanter={peopleStorege.getFemale()}
            textCategory={'Female Fans'}
          />
          <FansView
            textCanter={peopleStorege.getMale()}
            textCategory={'Male Fans'}
          />
          <FansView
            textCanter={peopleStorege.getOther()}
            textCategory={'Others'}
          />
        </View>
        {peopleStorege.getLoaded() ? (
          <View style={styles.wrapperLoad}>
            <ActivityIndicator />
          </View>
        ) : (
          <FlatList
            disableVirtualization
            data={peopleStorege.getAllPeoples()}
            renderItem={({item, index}) => renderCard(item, index)}
            showsVerticalScrollIndicator={false}
            onMomentumScrollBegin={() =>
              setOnEndReachedCalledDuringMomentum(false)
            }
            onEndReachedThreshold={1}
            onEndReached={paginationScreen}
          />
        )}
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.FFFFFF,
  },
  mainWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
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
  wrapperLoad: {
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperFans: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});
