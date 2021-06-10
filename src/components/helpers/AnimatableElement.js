import React from 'react';
import * as Animatable from 'react-native-animatable';

function AnimatableElement({ animationName, children }) {
    return (
        <Animatable.View
            animation={animationName}
        >
            {children}
        </Animatable.View>
    );
}

export default AnimatableElement;