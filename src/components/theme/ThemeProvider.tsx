import React from 'react';

import {ThemeContext} from './ThemeContext';
import {ThemeSettingsContext} from './ThemeSettingsContext';
import {DEFAULT_DARK_THEME, DEFAULT_LIGHT_THEME, DEFAULT_THEME} from './constants';
import {getDeprecatedRootClassName, getRootClassName} from './getBodyClassName';
import type {RealTheme, Theme} from './types';
import {updateBodyClassName} from './updateBodyClassName';
import {useSystemTheme} from './useSystemTheme';

interface ThemeProviderExternalProps {}

interface ThemeProviderDefaultProps {
    theme: Theme;
    systemLightTheme: RealTheme;
    systemDarkTheme: RealTheme;
    nativeScrollbar: boolean;
    scoped: boolean;
    rootClassName: string;
}

export interface ThemeProviderProps
    extends ThemeProviderExternalProps,
        Partial<ThemeProviderDefaultProps>,
        React.PropsWithChildren<{}> {}

export function ThemeProvider({
    theme = DEFAULT_THEME,
    systemLightTheme = DEFAULT_LIGHT_THEME,
    systemDarkTheme = DEFAULT_DARK_THEME,
    nativeScrollbar = false,
    scoped = false,
    rootClassName = '',
    children,
}: ThemeProviderProps) {
    const systemTheme = (
        useSystemTheme() === 'light' ? systemLightTheme : systemDarkTheme
    ) as RealTheme;
    const themeValue = theme === 'system' ? systemTheme : theme;

    const prevRootClassName = React.useRef('');

    React.useEffect(() => {
        if (!scoped) {
            updateBodyClassName(
                themeValue,
                {'native-scrollbar': nativeScrollbar},
                rootClassName,
                prevRootClassName.current,
            );
            prevRootClassName.current = rootClassName;
        }
    }, [nativeScrollbar, themeValue, scoped, rootClassName]);

    const contextValue = React.useMemo(
        () => ({
            theme,
            themeValue,
        }),
        [theme, themeValue],
    );

    const themeSettingsContext = React.useMemo(
        () => ({systemLightTheme, systemDarkTheme}),
        [systemLightTheme, systemDarkTheme],
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            <ThemeSettingsContext.Provider value={themeSettingsContext}>
                {scoped ? (
                    <div
                        className={getRootClassName(
                            {theme: themeValue, 'native-scrollbar': nativeScrollbar},
                            [
                                getDeprecatedRootClassName({
                                    theme: themeValue,
                                    'native-scrollbar': nativeScrollbar,
                                }),
                                rootClassName,
                            ],
                        )}
                    >
                        {children}
                    </div>
                ) : (
                    children
                )}
            </ThemeSettingsContext.Provider>
        </ThemeContext.Provider>
    );
}

ThemeProvider.displayName = 'ThemeProvider';
