import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon, SwatchIcon, XMarkIcon } from '@heroicons/react/24/outline'
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
    const [hue, setHue] = useState('240');
    const [theme, setTheme] = useState('light');
    const [isColourPicking, setIsColourPicking] = useState(false);

    const handleThemeBtn = () => setTheme(theme === "light" ? "dark" : "light");

    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', theme);
    }, [theme]);

    useEffect(() => {
        document.documentElement.style.setProperty('--_hue', hue);
    }, [hue]);
    
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
                        <input 
                            className={styles.picker}
                            type="range"
                            min="0"
                            max="360"
                            aria-label="Change colour theme slider"
                            value={hue}
                            onInput={(e) => setHue(e.target.value)}

                        />
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
