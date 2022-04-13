import { IconType } from "react-icons";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { theme } from "../../themes/MainTheme";

export const socialIconsList = [
  {
    icon: <FaFacebookF />,
    fill: "white",
    bgr: "",
    fillHover: "",
    path: "https://www.facebook.com/Sofomo-131919800556137/",
  },
  {
    icon: <FaLinkedinIn />,
    fill: `${theme.colors.iconsDisactive}`,
    bgr: "white",
    fillHover: `${theme.colors.backgroudBlue}`,
    path: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQElU3Q1aZL_ygAAAX_pG7bwzTw-NI5aiqEkypuDSnAbiSgF7i_glDfRKPHuGzK1fDVbL-5PA8axCtV_gxOsn6g4DFuxW1phvXkbivNwRXwpsx8gc9A1chPDYaS86o8ODI9Ak-0=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsofomo%2F",
  },
];
