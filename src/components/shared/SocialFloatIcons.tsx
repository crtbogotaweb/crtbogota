import { useState } from "react";
import { itemsSocialFloatIcons } from "../../locales/socialFloatIcons";
import "./../styles/socialFloatIcons.css";
import { SHOW_SOCIAL_FLOAT_ICONS } from "../../constants/time";

const SocialFloatIcons = () => {
  const [showIcons, setShowIcons] = useState(false);

  const showIconsInTime = () => {
    setTimeout(() => {
      setShowIcons(true);
    }, SHOW_SOCIAL_FLOAT_ICONS);
  };

  showIconsInTime();

  return (
    <div className={`socialFloatIcons_container ${showIcons && "show_icons"}`}>
      {itemsSocialFloatIcons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="blank"
          style={{ background: `#${item.color}` }}
        >
          <i className={`${item.icon} icon_small`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialFloatIcons;
