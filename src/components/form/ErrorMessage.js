import React from 'react';

import styles from '../../styles/components/comp.errormessage.style';
import theme from '../../config/theme';
import Typography from '../helpers/Typography';

function ErrorMessage({ error, visible }) {
    const { danger } = theme;

    if (!visible || !error) return null;

    return (
        <Typography color={danger} otherStyles={styles.label}>
            {error}
        </Typography>
    );
}

export default ErrorMessage;