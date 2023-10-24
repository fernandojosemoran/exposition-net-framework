import { useState } from "react"

const useTheme = () => {
    const [theme, setTheme] = useState(window.localStorage.getItem("theme"));
    function managementerTheme(theme) {
        const light:string = "light";
        const dark:string = "dark";

        if (theme === light) {
            window.localStorage.theme = dark;
        };

        if (theme === dark) {
            window.localStorage.theme = light;
        };
    };

    return {
        managementerTheme,
        theme,
        setTheme,
    }
};

export default useTheme;