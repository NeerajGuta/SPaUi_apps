import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Waterdrop = ({ size, color }) => {
  const radius = size / 2;
  const controlPointOffset = radius * .8;

  return (
    <View>
      <Svg width={size} height={size}>
        <Path
          d={`M${radius} 0 
            C${radius + controlPointOffset} 0, ${size} ${radius - controlPointOffset}, ${size} ${radius}
            C${size} ${radius + controlPointOffset}, ${radius} ${size}, ${radius} ${size}
            C${radius} ${size}, 0 ${radius + controlPointOffset}, 0 ${radius}
            C0 ${radius - controlPointOffset}, ${radius} 0, ${radius} 0
            Z`}
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default Waterdrop;