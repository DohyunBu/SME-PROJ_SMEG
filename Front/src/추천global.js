import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-dm-sans: 'DM Sans';
--font-plus-jakarta-sans: 'Plus Jakarta Sans';

/* font sizes */
--font-size-sm: 14px;
--font-size-base: 16px;
--font-size-5xs: 8px;

/* Colors */
--neutral-colors-white: #fff;
--color-thistle: #c7b7eb;
--neutral-colors-headings-black: #5d5a88;
--color-black: #000;
--color-whitesmoke: #eaeaea;
--color-gray-100: #757575;

/* Gaps */
--gap-5xs: 8px;

/* Paddings */
--padding-5xl: 24px;
--padding-17xl: 36px;

/* border radiuses */
--br-21xl: 40px;
--br-3xs: 10px;
--br-xl: 20px;

}
`;
