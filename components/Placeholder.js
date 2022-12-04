import { useState } from "react";

import styles from "../styles/Placeholder.module.css";

import happy from "../public/images/stereo-typefaces_happyface.png";
import sad from "../public/images/stereo-typefaces_sadface.png";

const Placeholder = () => {
  const [change, setChange] = useState(false);
  return (
    <div className={styles.wrapper}>
      <a href={"mailto:info@stereotypefaces.com"}>
        <div className={styles.controls}>
          <div className={styles.hoverLeft}>
            <div
              className={styles.quarter}
              onMouseEnter={() => setChange(false)}
            ></div>
            <div
              className={styles.quarter}
              onMouseEnter={() => setChange(true)}
            ></div>
          </div>
          <div className={styles.hoverRight}>
            <div
              className={styles.quarter}
              onMouseEnter={() => setChange(true)}
            ></div>
            <div
              className={styles.quarter}
              onMouseEnter={() => setChange(false)}
            ></div>
          </div>
        </div>
      </a>

      <div className={styles.imageWrapper}>
        {change ? (
          <img
            src={happy}
            layout="fill"
            objectFit="contain"
            alt={"Stereo Typefaces"}
          />
        ) : (
          <img
            src={sad}
            layout="fill"
            objectFit="contain"
            alt={"Stereo Typefaces"}
          />
        )}
      </div>
    </div>
  );
};

export default Placeholder;
