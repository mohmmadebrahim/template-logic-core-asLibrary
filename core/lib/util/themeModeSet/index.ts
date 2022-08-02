export interface IThemeModeProps {
    mode: "dark" | "light"
}

export const ThemeModeSetUp = ({ mode }: IThemeModeProps) => {
    const GeyPropertyCss = document.documentElement.style;
    if (mode === "dark") {
        GeyPropertyCss.setProperty('--body--', "#2a2424")
        GeyPropertyCss.setProperty('--shadow--', "#000000")
        GeyPropertyCss.setProperty('--salon--bar--', "#404b57")
        GeyPropertyCss.setProperty('--salon--text--light--', "#2a2424")
        GeyPropertyCss.setProperty('--salon--text--dark--', "#ebebeb")
        GeyPropertyCss.setProperty('--landing--bar--', "#da9600")
        GeyPropertyCss.setProperty('--landing--text--light--', "#2a2424")
        GeyPropertyCss.setProperty('--landing--text--dark--', "#ebebeb")        
    }
    else {
        GeyPropertyCss.setProperty('--body--', "#fdfdfd")
        GeyPropertyCss.setProperty('--shadow--', "#bbbbbb")
        GeyPropertyCss.setProperty('--salon--bar--', "#404b57")
        GeyPropertyCss.setProperty('--salon--text--light--', "#ffffff")
        GeyPropertyCss.setProperty('--salon--text--dark--', "#414042")
        GeyPropertyCss.setProperty('--landing--bar--', "#ffbe00")
        GeyPropertyCss.setProperty('--landing--text--light--', "#ffffff")
        GeyPropertyCss.setProperty('--landing--text--dark--', "#414042")
    }
};

