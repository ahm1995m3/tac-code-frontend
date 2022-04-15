import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0px;
    font-family: Arial, Helvetica, sans-serif;





 
   

   
}

/* //controls main body background color  */

body {
    background-color: #DAE0E6;
   
}








/* default font colors  */
h1 {
    color: ${({ theme }) => theme.colors.richBlack};
    font-weight: 600;

}

 h2, h3, h4, h5, p, div {
    color: ${({ theme }) => theme.colors.almostBlack};
    line-height: 1.5rem;
   
}









/* font sizing  */

.font-size-xs {
    font-size: 0.6rem;

}

.font-size-sm {
    font-size: 0.9rem;
    
}
.font-size-md {
    font-size: 1rem;
    
}
.font-size-lg {
    font-size: 1,5rem;
    
}
.font-size-xl {

    font-size: 2.4rem;
    
}

@media (max-width: 500px) {
.font-size-xs {
     font-size: 0.5rem;

}

.font-size-sm {
    font-size: 0.8rem;
    
}
.font-size-md {
    font-size: 0.9rem;
    
}
.font-size-lg {
    font-size: 1,3rem;
    
}
.font-size-xl {

    font-size: 2rem;
    
}

}


/*  theme colors */

.text-color-light-grey {
    color: ${({ theme }) => theme.colors.lightGray};
}

.text-color-blue {
    color: ${({ theme }) => theme.colors.themeBlue};
}


.font-italic {
    font-style: italic ;
}

.font-under-line {
    text-decoration: underline;
}


.font-double-spaced {
    line-height: 2rem;
}













`;

export default GlobalStyles;
