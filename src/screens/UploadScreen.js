import React from 'react';
import { Modal, View } from 'react-native';

import * as Progress from 'react-native-progress'
import LottieView from 'lottie-react-native';
import styles from '../styles/screens/screen.upload.style';
import theme from '../config/theme';

const { primary } = theme;

function UploadScreen({ onDone, progress = 0, visible = false }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? (
                    <Progress.Bar color={primary} progress={progress} width={200} />
                ) : (
                    <LottieView
                        autoPlay
                        loop={false}
                        onAnimationFinish={onDone}
                        source={require("../assets/animations/done.json")}
                        style={styles.animation}
                    />
                )}
            </View>
        </Modal>
    );
}

export default UploadScreen;