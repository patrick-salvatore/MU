export const theme = {
  typography: {
    fontFamily: ['Roboto', 'Poppins'].join(','),
    fontSize: 12,
    h1: {
      fontSize: 24,
    },
    h2: {
      fontSize: 18,
    },
    h3: {
      fontSize: 16,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 13,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
    subtitle1: {
      fontSize: 10,
    },
    subtitle2: {
      fontSize: 8,
    },
    caption: {
      fontSize: 12, // note: mui datepicker uses this
    },
  },
  palette: {
    primary: {
      main: '#3A4C56',
      light: '#f8f9fa',
      dark: '#323c47',
      // contrastText: "white",
    },
    secondary: {
      main: '#13cadd',
      light: '#9bd0f0',
      dark: '#6a9fbd',
    },
    error: {
      main: '#f54c62',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiPickersCalendarHeader: {
      dayLabel: {
        fontSize: 14,
      },
    },
    MuiTableRow: {
      hover: {
        '&:hover': {
          backgroundColor: 'rgba(19, 202, 221, 0.2) !important',
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: 5,
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: 12,
      },
    },
  },
};

export const appTheme: AppTheme = {
  ...theme,
  paddings: {
    sm: 8,
    md: 12,
    lg: 18,
  },

  button: {
    small: '',
    smallMD: '',
    smallLG: '',
    medium: '',
    mediumLG: '',
    mediumXL: '',
    mediumXLNarrow: '',
    large: '',
  },

  colors: {
    main: '#3A4C56',
    transparent: 'transparent',
    transparentOffWhite: 'rgba(248, 249, 250, 0.2)',
    transparentSecondary: 'rgba(19, 202, 221, 0.2)',
    white: '#ffffff',
    black: '#000000',
    dark: '#47495a',
    red: '#ee1d13',
    lightGrey: '#bdcad2',
    lighterGrey: '#dee4e8',
    slate: '#617986',
    offWhite: '#f8f9fa',
    yellow: '#DDBF13',
    alto: '#d8d8d8',
    wildSand: '#F4F4F4',
    seaGreen: '#4cf58b',
    space: '#233539',
    lightBlack: '#555459',
    grey: '#9e9ea6',
    darkGrey: '#617986',
    placeholderGrey: '#95a1a8',
    orange: '#f58b4c',
    orangeLight: '#ff8b6f',
    lightBlue: '#9bd0f0',
    dodgerBlue: '#4DA1FF',
    blue: '#2db4f4',
    darkBlue: '#6a9fbd',
    aqua: '#89E4EE',
    shady: '#979797',
    affair: '#75487a',
    salad: '#4e9473',
    alabaster: '#fbfbfb',
    cement: '#917463',
    athens: '#f9fafb',
    manatee: '#9A9A9B',
    iron: '#DADBDC',
    cyan: '#13cadd',
    mud: '#913b08',
  },

  measurements: {
    headerHeight: 50,
    subHeaderHeight: 85,
    navClosedWidth: 55,
    navOpenedWidth: 240,
  },
};

export type AppTheme = {
  paddings: Record<'sm' | 'md' | 'lg', string | number>;
  colors: {
    main: string;
    transparent: string;
    white: string;
    black: string;
    dark: string;
    red: string;
    lightGrey: string;
    lighterGrey: string;
    slate: string;
    yellow: string;
    alto: string;
    wildSand: string;
    space: string;
    lightBlack: string;
    grey: string;
    darkGrey: string;
    placeholderGrey: string;
    orange: string;
    orangeLight: string;
    seaGreen: string;
    lightBlue: string;
    dodgerBlue: string;
    darkBlue: string;
    aqua: string;
    offWhite: string;
    shady: string;
    blue: string;
    affair: string;
    salad: string;
    alabaster: string;
    cement: string;
    athens: string;
    manatee: string;
    iron: string;
    cyan: string;
    transparentOffWhite: string;
    transparentSecondary: string;
    mud: string;
  };
  button: {
    small: string;
    smallMD: string;
    smallLG: string;
    medium: string;
    mediumLG: string;
    mediumXL: string;
    mediumXLNarrow: string;
    large: string;
  };
  measurements: {
    headerHeight: number;
    subHeaderHeight: number;
    navClosedWidth: number;
    navOpenedWidth: number;
  };
};
