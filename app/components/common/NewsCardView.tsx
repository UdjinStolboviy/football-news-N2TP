import React, {useEffect, useState} from 'react';
import {People} from '../../mobx/dto/people';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NavigatorConstants} from '../../utils/navigator-constants';
import {News} from '../../mobx/dto/news';
import {Colors} from '../../utils/colors';

export interface NewsCardViewProps {
  news: News;
  index: number;
}

export const NewsCardView = ({news, index}: NewsCardViewProps) => {
  const navigation = useNavigation();
  const year = news.getPublishedAt().slice(0, 4);
  const month = news.getPublishedAt().slice(5, 7);
  const day = news.getPublishedAt().slice(8, 10);
  const extractDomain = (url: string) => {
    const domainRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im;
    const matches = url.match(domainRegex);
    if (matches && matches.length > 1) {
      return matches[1];
    }
    return '';
  };
  const webUrl = extractDomain(news.getUrl());
  const colorBack = index % 2 !== 0 ? Colors.C9A9A9A : Colors.ACACACA;

  return (
    <View style={[styles.container, {backgroundColor: colorBack}]}>
      <Image
        style={{width: '35%', height: 88}}
        source={{uri: news.getUrlToImage()}}
        loadingIndicatorSource={{uri: news.getUrlToImage()}}
      />
      <View style={styles.mainInfoWrapper}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 4,
            width: '100%',
          }}>
          <Text style={[styles.textInfo]}>{`${day}.${month}.${year}`}</Text>
          <Text style={[styles.textInfo]}>{`${webUrl}`}</Text>
        </View>
        <Text numberOfLines={2} style={[styles.textInfo]}>
          {news.getTitle()}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: -5,
            marginTop: 5,
          }}>
          <TouchableOpacity
            onPress={() =>
              // @ts-ignore
              navigation.navigate(NavigatorConstants.NEWS_SCREEN, {
                url: news.getUrl(),
              })
            }
            style={styles.buttonRead}>
            <Text style={styles.textButton}>Read</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 88,
    flexDirection: 'row',
  },
  mainWrapper: {},
  mainInfoWrapper: {
    width: '65%',
    padding: 5,
  },
  textInfo: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.OFOFOFO,
  },
  buttonRead: {
    width: 103,
    height: 23,
    backgroundColor: Colors.C343443,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    marginBottom: Platform.OS === 'ios' ? 0 : 5,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.FFFFFF,
  },
});
