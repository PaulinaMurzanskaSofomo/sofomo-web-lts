import React, { useState, MouseEvent } from "react";
import { DropdownDisplay } from "./DropdownDisplay/DropdownDisplay";

export const NestedDropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleActiveClass = (e: MouseEvent) => {
    const target = e.currentTarget;
    setIsActive(!isActive);
    setOverlayActive(!overlayActive);
    setSelectedItem(target.id);
  };

  const handleOverlay = () => {
    setOverlayActive(false);
    setIsActive(false);
  };

  return (
    <DropdownDisplay
      isActive={isActive}
      selectedItem={selectedItem}
      overlayActive={overlayActive}
      handleActiveClass={handleActiveClass}
      handleOverlay={handleOverlay}
    />
  );
};
