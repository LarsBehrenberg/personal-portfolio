import Typography from 'typography'

// This website uses the system font stack after the placed "Nunito" font
// The scaleRatio will be overwritten for smaller breakpoints in src/components/Layout

const typography = new Typography({
  title: 'Lars Behrenberg | Freelance Website Developer',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Nunito',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  bodyFontFamily: [
    'Nunito',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  scaleRatio: 3.157,
  headerWeight: 700,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
  }),
})

export default typography
