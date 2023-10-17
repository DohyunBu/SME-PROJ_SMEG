import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-inter: Inter;
--font-plus-jakarta-sans: 'Plus Jakarta Sans';

/* font sizes */
--font-size-lg: 18px;
--font-size-8xl: 27px;
--font-size-base: 16px;

/* Colors */
--color-white: #fff;
--color-gray-100: #757575;
--color: #181818;
--color-gray-200: #130f26;
--color-turquoise-100: rgba(59, 234, 202, 1);
--color-black: #000;
--color-mediumslateblue: rgba(179, 121, 255, 1);
--color-lavender: #ddd6ed;
--eff: #712eff;
--color-mediumpurple: #8a74c0;
--color-slateblue: #5534a5;

/* border radiuses */
--br-8xs: 5px;

}
`;
