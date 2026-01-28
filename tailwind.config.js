module.exports = {
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fade: 'fade 3s ease-in-out',
      },
    },
  },
};
