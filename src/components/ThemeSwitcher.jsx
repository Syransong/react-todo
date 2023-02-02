import { useState } from 'react';
import { MoonIcon, SunIcon, SwatchIcon, XMarkIcon } from '@heroicons/react/24/outline'
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light');
    const [isColourPicking, setIsColourPicking] = useState(false);

    const handleThemeBtn = () => setTheme(theme === "light" ? "dark" : "light");
    
    return (
        <aside
            className={styles.wrapper}
        >
            {
                isColourPicking ? (
                    <>
                        <button
                            className={`btn ${styles.close}`}
                            aria-label="CLose colour picking mode"
                            onClick={() => setIsColourPicking(false)}
                        >
                            <XMarkIcon />
                        </button>
                        <input type="range"/>
                    </>
                )
                : (
                    <div className={styles.btns}>
                        <button
                            className='btn'
                            aria-label={`Change theme to ${theme === "light" ? "dark" : "light"} mode`}
                            role="switch"
                            onClick={handleThemeBtn}
                        >
                            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                        </button>
                        <button
                            className='btn'
                            aria-label='Enable colour picking mode'
                            onClick={() => setIsColourPicking(true)}
                        >
                            <SwatchIcon />
                        </button>
                    </div>
                )
            }
        </aside>
    )
}

export default ThemeSwitcher;
