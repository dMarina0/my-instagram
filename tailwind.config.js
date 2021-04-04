module.exports = {
    future: {
        removeDeprecatedGapUtilities: true
    },
    theme:{
        fill : (theme) => ({
            red: theme('color.red.primary')
        }),
        colors: {
            white:'#ffffff',
            blue: {
                medium: '#005c98'
            },
            black : {
                light: '#005c98',
                faded: '#00000059'
            },
            red:{
                primary: "#ed4956"
            }
        }
    }
};