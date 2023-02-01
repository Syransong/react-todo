import { useState } from 'react';

import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {

    const [isColourPicking, setIsColourPicking] = useState(false);
    return (
        <aside
            className={styles.wrapper}
        >
        ThemeSwitcher
        </aside>
    )
}

export default ThemeSwitcher;
