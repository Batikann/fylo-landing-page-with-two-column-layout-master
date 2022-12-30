/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        openSans:"'Open Sans', sans-serif",
        raleway:"'Raleway', sans-serif"
      },
      colors:{
        v_dark_b:"hsl(243, 87%, 12%)",
        d_blue:"hsl(238, 22%, 44%)",
        b_blue:"hsl(224, 93%, 58%)",
        b_l_blue:"hsla(224, 93%, 58%,0.6)",
        m_cyan:"hsl(170, 45%, 43%)",
        l_blue:"hsl(240, 75%, 98%)",
        l_gray:"hsl(0, 0%, 75%)"

      }
    },
  },
  plugins: [],
}
