import React, { useState } from "react";
import LockSlider from "./LockSlider";
import { AiFillUnlock } from "react-icons/ai";
import HomeScreenImg from "./img/home.jpg";
import LockScreenImg from "./img/moon.jpg";

export default function SlideToUnlock() {
  const [uiProps, setUiProps] = useState({
    uiText: "Unlock Screen",
    uiColor: "#eee",
    uiBg: `url(${LockScreenImg}) center/cover no-repeat`,
  });
  const [showLockSlider, setShowLockSlider] = useState(true);
  const [lockSliderValue, setLockSliderValue] = useState(0);

  const handleLockSliderInput = (e) => {
    setLockSliderValue(e.target.value);
    if (e.target.value >= 100) {
      setUiProps({
        uiText: "Home Screen",
        uiColor: "#000",
        uiBg: `url(${HomeScreenImg}) center/cover no-repeat`,
      });
      setShowLockSlider(false);
    }
  };

  return (
    <div
      className="container text-center d-flex flex-column border-20 shadow-md"
      style={{
        height: "70vh",
        marginTop: "15vh",
        width: 340,
        border: "4px solid #000",
        background: uiProps.uiBg,
        position: "relative",
      }}
    >
      <h1 className="title" style={{ color: uiProps.uiColor }}>
        {uiProps.uiText}
      </h1>
      {showLockSlider ? (
        <div
          style={{
            position: "absolute",
            bottom: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LockSlider
            width={"250px"}
            handleInput={handleLockSliderInput}
            value={lockSliderValue}
          />
        </div>
      ) : (
        <AiFillUnlock className="unlockIcon" />
      )}
    </div>
  );
}
