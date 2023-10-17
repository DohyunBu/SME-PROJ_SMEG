import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--time: Inter;
--font-plus-jakarta-sans: 'Plus Jakarta Sans';
--paragraph-medium-16: Roboto;

/* font sizes */
--time-size: 8px;
--table-header-size: 12px;
--font-size-lgi: 19px;
--font-size-sm: 14px;
--paragraph-medium-16-size: 16px;
--font-size-3xl: 22px;

/* Colors */
--dark-text: #fff;
--color-blue: #4e00ff;
--lines: #41403e;
--color-crimson: #dd3a3a;
--color-gray-100: #757575;
--light-text: #302c36;
--color-gray-200: #130f26;
--color-darkgray: #abb5be;
--color-black: #000;
--color-plum: rgba(196, 158, 248, 0.4);
--color-ghostwhite: #f1eef6;
--color-whitesmoke: #eaeaea;
--color-slateblue: #5534a5;

/* Gaps */
--gap-11xs: 2px;
--gap-10xs: 3px;
--gap-3xs: 10px;

/* Paddings */
--padding-9xs: 4px;
--padding-11xs: 2px;
--padding-10xs: 3px;
--padding-3xs: 10px;
--padding-smi: 13px;

/* border radiuses */
--br-8xs: 5px;
--br-3xs: 10px;
--br-11xl: 30px;
--br-xl: 20px;

}
`;
