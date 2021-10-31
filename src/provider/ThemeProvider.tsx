import React, {ReactNode} from "react";
import {Theme, ThemeContext} from "../context/ThemeContext";
import ChangeCssVariables from "../model/ChangeCssVariables";
import {storage} from "../model/Storage";

interface Props {
    children: ReactNode,
}

export const ThemeProvider = ({children, ...props}: Props) => {

    const [theme, setTheme] = React.useState<Theme>(
        storage.getItem('theme') || Theme.LIGHT);

    ChangeCssVariables(theme);
    const changeTheme = (theme: Theme) => {
        storage.setItem('theme', theme)
        setTheme(theme);
        ChangeCssVariables(theme)
    };

    return (
        <ThemeContext.Provider value={{
            theme,
            changeTheme,
        }}
                               {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}