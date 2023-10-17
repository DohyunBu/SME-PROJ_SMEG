import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--checkbox: 'SF Pro Display';
--button-label: Roboto;
--font-plus-jakarta-sans: 'Plus Jakarta Sans';

/* font sizes */
--checkbox-size: 12px;
--button-label-size: 15px;
--hint-placeholder-size: 11px;

/* Colors */
--white-ffffff: #fff;
--system-blue-007aff: #007aff;
--black-500-808080: #808080;
--black-900-1a1a1a: #1a1a1a;
--black-800-333333: #333;
--black-100-e5e5e5: #e5e5e5;
--black-50-f2f2f2: #f2f2f2;
--system-green-26a212: #26a212;
--system-orange-ff9500: #ff8c00;
--system-red-ff3b30: #ff3b30;
--black-600-666666: #666;
--color-dimgray-100: #4d4d4d;
--black-000000: #000;

/* Gaps */
--gap-5xs: 8px;
--gap-base: 16px;
--gap-12xs: 1px;

/* Paddings */
--padding-5xl: 24px;
--padding-base: 16px;
--padding-5xs: 8px;
--padding-8xs: 5px;
--padding-9xs: 4px;

/* border radiuses */
--br-5xs: 8px;
--br-7xs: 6px;

}
`;
