import { themeQuartz, iconSetQuartzLight } from 'ag-grid-community';

// to use myTheme in an application, pass it to the theme grid option
const myTheme = themeQuartz
    .withPart(iconSetQuartzLight)
    .withParams({
        backgroundColor: "#ffffff",
        browserColorScheme: "dark",
        columnBorder: false,
        fontFamily: "Arial",
        fontSize: 14,
        foregroundColor: "rgb(46, 55, 66)",
        headerBackgroundColor: "#F9FAFB",
        headerFontSize: 14,
        headerFontWeight: 600,
        headerTextColor: "#919191",
        oddRowBackgroundColor: "#F9FAFB",
        rowBorder: false,
        rowHeight: 50,
        sidePanelBorder: false,
        spacing: 8,
        wrapperBorder: false,
        wrapperBorderRadius: 0
    });

export default myTheme;