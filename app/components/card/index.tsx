import React from "react";

export const Card: React.FC<{
  text: string;
  selected?: boolean;
  onClick: (param: any) => void;
  id: string;
}> = ({ text, id, selected, onClick }) => {
  return (
    <div
      className={`card ${selected ? "selected-card" : ""}`}
      onClick={() => {
        onClick(id);
      }}
    >
      {text}
    </div>
  );
};
