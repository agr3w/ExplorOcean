import React from 'react';
import NavigatorBase from './NavigatorBase';

export default function NavigatorTransparent() {
  return (
    <NavigatorBase
      transparent
      buttonColor="#fff"
      sx={{ zIndex: 10 }}
    />
  );
}