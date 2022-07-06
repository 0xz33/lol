import { createGlobalStyle } from 'styled-components';
import { colors } from '.';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    box-sizing: border-box;

  }
  body{
    background-color:${colors.dark.background};
  }

  h1,h2,h3,h4,h5,p,a{
    font-family: "IBM Plex Mono",'Courier New',system-ui, -apple-system, BlinkMacSystemFont, monospace;
    text-rendering: optimizeLegibility;
    color:${colors.dark.text};
  }

  h1{
    font-size: 2em;
    font-weight: 500;
    line-height: 1.333;
    letter-spacing: -1.33px;
}

  h2{
    font-size: 1.88rem;
    font-weight: 500;
    line-height: 1.333;
    letter-spacing: -1.11px;
  }

  p{
    font-weight:300;
    font-size: 1.216rem;
    line-height: 1.618;
    letter-spacing: -.13px;
  }
  a{
    text-decoration:none;
    color:white;
  }

  /* a:visited{text-decoration:none;} */

  a:hover {
    
  }

`;
