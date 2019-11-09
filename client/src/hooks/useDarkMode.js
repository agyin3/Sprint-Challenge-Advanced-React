import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';

const useDarkMode = (key, initialValue) => {

    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)

    useEffect(() => {
        const body = document.querySelector('body');
        return darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

export default useDarkMode