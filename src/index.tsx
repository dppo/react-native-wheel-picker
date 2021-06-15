import { requireNativeComponent, ViewStyle } from 'react-native';

type WheelPickerProps = {
  color: string;
  style: ViewStyle;
};

export const WheelPickerViewManager = requireNativeComponent<WheelPickerProps>(
'WheelPickerView'
);

export default WheelPickerViewManager;
