import { AsyncStorage } from 'react-native';
import moment from 'moment/moment';

const PREFIX = 'cache';
const EXPIRY_IN_MINUTES = 5;

const isEXpired = (item) => {
    const now = moment(Date.now());
    const storedTime = moment(item.timestamp);
    return now.diff(storedTime, 'minutes') > EXPIRY_IN_MINUTES;
};

const store = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        };

        await AsyncStorage.setItem(PREFIX + key, JSON.stringify(item));
    } catch (error) {
        console.log(error);
    }
};

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(PREFIX + key);
        const item = JSON.parse(value);

        if (!item) return null;

        if (isEXpired(item)) {
            await AsyncStorage.removeItem(PREFIX + key);
            return null;
        }

        return item.value;
    } catch (error) {
        console.log(error);
    }
};

export default {
    get,
    store
};