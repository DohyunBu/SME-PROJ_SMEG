import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-nunito: Nunito;
--micro-button-label: Roboto;
--font-plus-jakarta-sans: 'Plus Jakarta Sans';

/* font sizes */
--font-size-base: 16px;
--font-size-xl: 20px;
--micro-button-label-size: 12px;

/* Colors */
--white-ffffff: #fff;
--black-000000: #000;
--color-darkslategray: #0a3749;
--black-100-e5e5e5: #e5e5e5;
--black-600-666666: #666;

/* Paddings */
--padding-3xs: 10px;
--padding-9xs: 4px;
--padding-base: 16px;

/* border radiuses */
--br-9xs: 4px;
--br-7xs: 6px;

}
`;