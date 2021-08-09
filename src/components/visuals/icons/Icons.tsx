import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { PRIMARY_COLOR } from '../../../styles/Colors';

export const CircleIcon = (props: IIconProps) => {
  return (
    <FontAwesome
      name={'circle'}
      size={props.size || 30}
      color={props.color || PRIMARY_COLOR}
      style={props.style}
    />
  );
};

export const SearchIcon = (props: IIconProps) => {
  return (
    <FontAwesome
      name={'search'}
      size={props.size || 30}
      color={props.color || PRIMARY_COLOR}
      style={props.style}
    />
  );
};

export const CaretUpIcon = (props: IIconProps) => {
  return (
    <FontAwesome
      name={'caret-up'}
      size={props.size || 30}
      color={props.color || PRIMARY_COLOR}
      style={props.style}
    />
  );
};

export const ErrorIcon = (props: IIconProps) => {
  return (
    <FontAwesome
      name={'warning'}
      size={props.size || 30}
      color={props.color || PRIMARY_COLOR}
      style={props.style}
    />
  );
};

export const RefreshIcon = (props: IIconProps) => {
  return (
    <FontAwesome
      name={'refresh'}
      size={props.size || 30}
      color={props.color || PRIMARY_COLOR}
      style={props.style}
    />
  );
};

export const CaretDownIcon = (props: IIconProps) => {
  return (
    <FontAwesome
      name={'caret-down'}
      size={props.size || 30}
      color={props.color || PRIMARY_COLOR}
      style={props.style}
    />
  );
};

export const HomeIcon = (props: IIconProps) => {
  return (
    <MaterialCommunityIcons
      name={'home'}
      size={props.size || 30}
      color={props.color || PRIMARY_COLOR}
      style={props.style}
    />
  );
};

export const CardsIcon = (props: IIconProps) => {
  return (
    <MaterialCommunityIcons
      name={'cards'}
      size={props.size || 30}
      color={props.color || PRIMARY_COLOR}
      style={props.style}
    />
  );
};

export const DropdownIcon = (props: IDropdownIconProps) => {
  return (
    props.value ? <CaretUpIcon {...props} /> : <CaretDownIcon {...props} />
  );
};

interface IDropdownIconProps extends IIconProps {
  value: boolean;

}


interface IIconProps {
  color?: string;
  size?: number;
  style?: Object
}
