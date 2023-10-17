import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-plus-jakarta-sans: 'Plus Jakarta Sans';
--font-dm-sans: 'DM Sans';

/* font sizes */
--font-size-base: 16px;
--font-size-xl: 20px;
--font-size-sm: 14px;

/* Colors */
--neutral-colors-white: #fff;
--color-gray-100: #757575;
--color-gray-200: #130f26;
--color-slateblue: #5534a5;
--color-whitesmoke: #eaeaea;
--color-black: #000;
--color-lavender: #ddd6ed;
--color-thistle: #c7b7eb;
--neutral-colors-headings-black: #5d5a88;
--color-ghostwhite: #f1eef6;

/* Gaps */
--gap-3xs: 10px;
--gap-4xs: 9px;
--gap-5xs: 8px;

/* Paddings */
--padding-11xs: 2px;
--padding-86xl: 105px;
--padding-16xl: 35px;
--padding-5xl: 24px;
--padding-17xl: 36px;
--padding-3xs: 10px;

/* border radiuses */
--br-3xs: 10px;
--br-21xl: 40px;
--br-xl: 20px;

}
`;
