export const MAIN_FONT_FAMILY = `
  font-family: "Rubik", sans-serif;
`

const H1 = `
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`

const H2 = `
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
`

const NORMAL = `
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
`

const MEDIUM = `
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`

const SMALL = `
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`

const SMALL_MEDIUM = `
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`

const THIN = `
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`

const THINK_MEDIUM = `
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`

export interface textInterface {
  [key: string]: string
}

export default {
  NORMAL,
  MEDIUM,
  SMALL,
  SMALL_MEDIUM,
  THIN,
  THINK_MEDIUM,
  H1,
  H2,
  MAIN_FONT_FAMILY
}
