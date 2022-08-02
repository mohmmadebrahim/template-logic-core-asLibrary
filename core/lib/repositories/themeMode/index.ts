import localforage = require("localforage")
import { IThemeModeProps, ThemeModeSetUp } from "../../util"

export const ThemeMode = async ({ mode }: Partial<IThemeModeProps>) => {
    mode && ThemeModeSetUp({ mode: mode })
    mode && await localforage.setItem("theme-mode", mode)
    const localMode = await localforage.getItem("theme-mode")

    if (!localMode) {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localMode === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
            ThemeModeSetUp({ mode: "dark" })
        } else {
            ThemeModeSetUp({ mode: "light" })
        }
    }
}