import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-plus-jakarta-sans: 'Plus Jakarta Sans';
--paragraph-medium-16: Roboto;
--headings-bold-48: Raleway;

/* font sizes */
--paragraph-medium-16-size: 16px;
--headings-bold-48-size: 48px;

/* Colors */
--color-white: #fff;
--white-white-10: #feffff;
--color-gray-100: #757575;
--black-black-40: #636d79;
--black-black-10: #a2a9b0;
--text-title-text: #333;
--color-whitesmoke: #eaeaea;

/* border radiuses */
--br-5xs: 8px;
--br-xl: 20px;

}
`;
