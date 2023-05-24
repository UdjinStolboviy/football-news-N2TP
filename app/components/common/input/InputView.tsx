import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';

interface IInputViewProps {
  value: string;
  onChange: (value: string) => void;
  containerStyle?: ViewStyle;
  innerElements?: JSX.Element[];
  placeholder?: string;
  topLabel?: string;
  bottomLabel?: string;
  onBlur?: () => void;
  isWarning?: boolean;
}

export const InputView: React.FC<IInputViewProps> = props => {
  const inputRef = React.useRef<TextInput>(null);
  const onChange = (value: string): void => {
    props.onChange(value);
  };

  const onPress = (): void => {
    inputRef.current?.focus();
  };

  return (
    <View style={[props.containerStyle]}>
      {props.topLabel && <Text style={styles.topLabel}>{props.topLabel}</Text>}
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[
          styles.container,
          {
            borderColor: props.isWarning ? Colors.FC6C03 : Colors.B3B3B3,
          },
        ]}>
        <TextInput
          ref={inputRef}
          keyboardType="default"
          onBlur={props.onBlur}
          placeholder={props.placeholder}
          style={styles.input}
          placeholderTextColor={Colors.B3B3B3}
          value={props.value}
          onChangeText={onChange}
        />
        {props.innerElements &&
          props.innerElements.map((element, index) => {
            return (
              <View style={styles.innerElement} key={index}>
                {element}
              </View>
            );
          })}
      </TouchableOpacity>
      {props.bottomLabel && (
        <Text style={styles.bottomLabel}>{props.bottomLabel}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topLabel: {
    fontSize: 14,
    color: Colors.C151515,
    marginBottom: 8,
  },
  input: {
    height: 50,
    flex: 1,
    color: Colors.B3B3B3,
  },
  innerElement: {
    margin: 4,
  },
  bottomLabel: {
    fontSize: 13,
    color: Colors.B3B3B3,
    marginTop: 6,
  },
});
