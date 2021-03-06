import { css } from '@linaria/core'

import { modalOpenClassName } from 'ui/molecules/Modal/Modal'
import { TEXT, COLOR } from 'ui/vars'

import 'react-toastify/dist/ReactToastify.css'

export default css`
  :global() {
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800;900&display=swap');

    .Toastify__toast-theme--light {
      background: transparent;
    }

    .Toastify__toast {
      box-shadow: none;
    }

    .react-contextmenu-wrapper {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      box-shadow: none;
    }

    #root,
    html {
      height: 100%;
    }

    body {
      margin: 0;
      height: 100%;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      // see component molecules/Modal
      &.${modalOpenClassName} {
        overflow: hidden;
      }
    }

    body,
    button,
    input {
      font-family: 'Rubik', sans-serif;
      ${TEXT.NORMAL};
      color: var(${COLOR.TEXT});
    }

    a {
      text-decoration: none;
    }
  }
`
