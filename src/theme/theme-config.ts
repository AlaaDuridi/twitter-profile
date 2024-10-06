import { createTheme, type ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {
    interface TypeBackground {
        default: string;
        paper: string;
    }

    interface Palette {
        bright: Palette['primary'];
    }
}

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        contrastThreshold: 2,
        primary: {
            main: '#3390d1',
            light: '#66aee0',
            dark: '#0e6ba8',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#6c757d',
            light: '#adb5bd',
            dark: '#495057',
            contrastText: '#000000',
        },
        text: {
            primary: '#1f2022',
            secondary: '#ffffff',
            disabled: '#ced4da',
        },
        error: {
            main: '#ba181b',
            light: '#e5383b',
            dark: '#a4161a',
            contrastText: '#1f2022',
        },
        warning: {
            main: '#fdc500',
            light: '#FDF59D',
            dark: '#F07F17',
            contrastText: '#000000',
        },
        success: {
            main: '#007200',
            light: '#38b000',
            dark: '#004b23',
            contrastText: '#1f2022',
        },

        background: {
            default: '#FBFBFB',
        },

        divider: '#E9EAF2',
    },
    typography: {
        body1: {
            fontSize: '14px',
            fontWeight: 700,
        },
        body2: {
            fontSize: '18px',
        },
        h3: {
            fontSize: '25px',
        },
        h2: {
            fontSize: '30px',
        },
        h1: {
            fontSize: '44px',
            marginBottom: '1.5rem',
            fontWeight: 700,
        },
        fontFamily: 'Lato, sans-serif',
        allVariants: {
            textTransform: 'none',
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                rounded: {
                    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
                    borderRadius: '.5rem',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '.5rem',
                    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '.5rem',
                    paddingBlock: '.7rem',
                    paddingInline: '5%',
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {},
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '18px',
                },
            },
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    borderRadius: '4px',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: ``,
        },
    },
};

export const theme = createTheme(themeOptions);