import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     background-color: var(---grey100);
     text-decoration: none;
	 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
 }

 :root{
     --grey100: #E0E0E0;
     --grey300: #828282;
     --grey600: #333333;
     --green1: #27AE60;
     --red1: #EB5757;
     --negative: #E60000;
     --sucess: #168821;
     --information: #155BCB;
 }

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
::-webkit-scrollbar {
  width: 0;               /* width of the entire scrollbar */
  height: 0;               /* width of the entire scrollbar */
}
::-webkit-scrollbar-thumb {
  background-color: #0a0a0a;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
}
@media (min-width: 790px) {
  ::-webkit-scrollbar {
  width: 4px;               /* width of the entire scrollbar */
  height: 6px;               /* width of the entire scrollbar */
}
}
`;

export default GlobalStyle;
