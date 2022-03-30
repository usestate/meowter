import { css } from '@linaria/core';

import { TRANSITION, SHADOW, COLOR } from 'ui/vars';

export default css`
  ${COLOR.ACCENT}: #EB7E44;
  ${COLOR.ACCENT_RGB}: 235, 126, 68;

  ${COLOR.ACCENT_DARK}: #F07132;
  ${COLOR.ACCENT_DARK_RGB}: 240, 113, 50;

  ${COLOR.ACCENT_ACTIVE}: #DD6221;
  ${COLOR.ACCENT_ACTIVE_RGB}: 221, 98, 33;

  ${COLOR.BG}: #FFFFFF;
  ${COLOR.BG_RGB}: 255, 255, 255;

  ${COLOR.TEXT}: #303030;
  ${COLOR.TEXT_RGB}: 30, 30, 30;

  ${COLOR.PRIMARY_DARK}: #555F6D;
  ${COLOR.PRIMARY_DARK_RGB}: 85, 95, 109;

  ${COLOR.PRIMARY_MEDIUM}: #737D8C;
  ${COLOR.PRIMARY_MEDIUM_RGB}: 115, 125, 140;

  ${COLOR.PRIMARY_LIGHT}: #8F97A3;
  ${COLOR.PRIMARY_LIGHT_RGB}: 143, 151, 163;

  ${COLOR.SECONDARY}: #D9D9DF;
  ${COLOR.SECONDARY_RGB}: 48, 48, 48;

  ${COLOR.SECONDARY_LIGHT}: #EFF0F5;
  ${COLOR.SECONDARY_LIGHT_RGB}: 239, 240, 245;

  ${COLOR.SUCCESS_PRIMARY}: #37D59C;
  ${COLOR.SUCCESS_PRIMARY_RGB}: 55, 213, 156;

  ${COLOR.ERROR}: #FF2929FF;
  ${COLOR.ERROR_RGB}: 255, 41, 41;

  ${COLOR.ERROR_DARK}: #F34200;
  ${COLOR.ERROR_DARK_RGB}: 243, 66, 0;

  ${COLOR.ERROR_LIGHT}: #FBBCB2;
  ${COLOR.ERROR_LIGHT_RGB}: 251, 188, 178;

  ${COLOR.ALERT_PRIMARY}: #FFBB37;
  ${COLOR.ALERT_PRIMARY_RGB}: 255, 187, 55;

  ${SHADOW.LIGHT}: 0px 4px 10px rgba(36, 48, 79, 0.06);
  ${SHADOW.MEDIUM}: 0px 6px 18px rgba(36, 48, 79, 0.15);

  ${TRANSITION.NORMAL}: 0.2s ease;
`;
