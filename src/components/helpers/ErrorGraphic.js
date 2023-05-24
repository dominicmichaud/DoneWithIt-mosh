import React from 'react';
import { Image, View } from 'react-native';

import RoundedButton from '../buttons/RoundedButton';
import theme from '../../config/theme';
import Typography from './Typography';

const { primary } = theme;

function ErrorGraphic({ buttonLabel, graphicUrl, onPress, title }) {
    return (
        <View>
            <View style={{ backgroundColor: '#FFF', width: 350, height: 350, borderRadius: 350 / 2, overflow: 'hidden' }}>
                <Image source={graphicUrl} style={{ width: 350, height: 350 }} />
            </View>
            <Typography otherStyles={{ marginVertical: 15, textAlign: 'center' }} size={22} type="heading">
                {title}
            </Typography>
            <RoundedButton bgColor={primary} label={buttonLabel} pressHandler={onPress} />
        </View>
    );
}

export default ErrorGraphic;