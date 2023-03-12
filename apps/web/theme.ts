import chakraTheme from "@chakra-ui/theme";
import {
    defineStyle,
    cssVar,
} from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/theme-tools";
import { extendBaseTheme, mergeThemeOverride } from "@chakra-ui/theme-utils";

const {
    Select,
    Tabs,
    Spinner,
    Popover,
    Progress,
    NumberInput,
    PinInput,
    Menu,
    Modal,
    Link,
    Form,
    FormError,
    FormLabel,
    Button,
    Input,
    Checkbox,
    Drawer,
    Container,
    Divider,
    CloseButton,
    Alert,
    Avatar,
    Textarea,
} = chakraTheme.components;

const colors = {
    black: {
        '50': '#f6f7f7',
        '100': '#e2e5e5',
        '200': '#c4c9cb',
        '300': '#9fa6a9',
        '400': '#7a8487',
        '500': '#60686c',
        '600': '#4c5155',
        '700': '#3f4346',
        '800': '#35383a',
        '900': '#202223',
    },
    white: {
        "50": "#ffffff",
        "100": "#efefef",
        "200": "#dcdcdc",
        "300": "#bdbdbd",
        "400": "#989898",
        "500": "#7c7c7c",
        "600": "#656565",
        "700": "#525252",
        "800": "#464646",
        "900": "#3d3d3d",
    },
    gray: {
        '50': '#f7f7f6',
        '100': '#e5e3e2',
        '200': '#cac7c5',
        '300': '#a8a4a0',
        '400': '#85807c',
        '500': '#78726d',
        '600': '#55504c',
        '700': '#46423f',
        '800': '#3a3835',
        '900': '#32312f',
    },
};

const fonts = {
    heading: `'Mona Sans', sans-serif`,
    body: `'Mona Sans', sans-serif`,
    mono: `'Mona Sans', sans-serif`,
};

const $startColor = cssVar("skeleton-start-color");
const $endColor = cssVar("skeleton-end-color");

const gray = defineStyle({
    _light: {
        [$startColor.variable]: "colors.gray.50", //changing startColor to red.100
        [$endColor.variable]: "colors.gray.100", // changing endColor to red.400
    },
});

const components = {
    Select,
    Drawer,
    Divider,
    CloseButton,
    Alert,
    Avatar,
    Tabs,
    Textarea,
    Popover,
    Progress,
    NumberInput,
    PinInput,
    Menu,
    Modal,
    Link,
    Form,
    FormError,
    FormLabel,
    Input,
    Checkbox,
    Skeleton: {
        variants: { gray },
        defaultProps: {
            variant: "gray",
        },
    },
    Text: {
        baseStyle: {
            color: "#202223",
        },
    },
    Spinner: mergeThemeOverride(Spinner, {
        sizes: {
            "2xl": {
                width: "12rem",
                height: "12rem",
            },
        },
    }),
    Button: mergeThemeOverride(Button, {
        baseStyle: {
            fontWeight: 700,
            fontSize: '0.9rem'
        },
        variants: {
            solid: ({ colorScheme }: StyleFunctionProps) => ({
                bg: `${colorScheme}.300`,
                color: "#202223",
                _hover: {
                    bg: `${colorScheme}.400`,
                },
            }),
            outline: ({ colorScheme }: StyleFunctionProps) => ({
                border: "1px solid",
                borderColor: `${colorScheme}.300`,
                color: `#202223`,
                bg: '#fff',
                _hover: {
                    bg: `${colorScheme}.50`,
                },
            })
        },
        sizes: {
            md: {
                py: 2,
                px: 4,
                fontSize: '0.9rem'
            },
            lg: {
                py: 4,
                px: 6,
                fontSize: '0.9rem'
            },
            xl: {
                py: 5,
                px: 8,
                height: "auto",
                fontSize: '0.9rem'
            },
        },
    }),
    Container: mergeThemeOverride(Container, {
        defaultProps: {
            size: "4xl",
        },
        sizes: {
            sm: {
                maxWidth: "sm",
            },
            md: {
                maxWidth: "lg",
            },
            lg: {
                maxWidth: "xl",
            },
            xl: {
                maxWidth: "2xl",
            },
            "2xl": {
                maxWidth: "3xl",
            },
            "3xl": {
                maxWidth: "4xl",
            },
            "4xl": {
                maxWidth: "5xl",
            },
            "5xl": {
                maxWidth: "6xl",
            },
            "6xl": {
                maxWidth: "7xl",
            },
        },
    }),
};

export const theme = extendBaseTheme({
    components,
    colors,
    fonts,
});
