import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Global, css } from '@emotion/react';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <Global
          styles={css`
            *,
            *:before,
            *:after {
              box-sizing: border-box;
            }
            html,
            body,
            div,
            span,
            object,
            iframe,
            figure,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            blockquote,
            pre,
            a,
            code,
            em,
            img,
            small,
            strike,
            strong,
            sub,
            sup,
            tt,
            b,
            u,
            i,
            ol,
            ul,
            li,
            fieldset,
            form,
            label,
            table,
            caption,
            tbody,
            tfoot,
            thead,
            tr,
            th,
            td,
            main,
            canvas,
            embed,
            footer,
            header,
            nav,
            section,
            video {
              margin: 0;
              padding: 0;
              border: 0;
              font: inherit;
              vertical-align: baseline;
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              text-size-adjust: none;
              font-family: 'Roboto', sans-serif;
              font-size: 24px;
              color: #343434;
            }
            footer,
            header,
            nav,
            section,
            main {
              display: block;
            }
            body {
              overflow: hidden;
            }
            ol,
            ul {
              list-style: none;
            }
            blockquote,
            q {
              quotes: none;
            }
            blockquote:before,
            blockquote:after,
            q:before,
            q:after {
              content: '';
              content: none;
            }
            table {
              border-collapse: collapse;
              border-spacing: 0;
            }
            input {
              -webkit-appearance: none;
              border-radius: 0;
              outline: none;
            }
            a {
              text-decoration: none;
              color: #343434;
            }
            a:focus,
            a:hover,
            a:visited,
            a:link,
            a:active {
              color: #343434;
              text-decoration: none;
            }
            button {
              font-family: 'Roboto', sans-serif;
              outline: none;
              cursor: pointer;
              -webkit-touch-callout: none;
              -webkit-user-select: none;
              -khtml-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
          `}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
