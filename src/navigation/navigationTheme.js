import { DefaultTheme } from '@react-navigation/native';

import theme from '../config/theme';
const { primary, white } = theme;

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: primary,
        background: white,
    },
};