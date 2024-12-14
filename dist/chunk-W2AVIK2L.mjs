// src/components/btns/basic/BtnText.tsx
var BtnText = ({ text, onClick }) => {
  return <div className="btn-text"><button type="button" onClick={onClick}><span>{text}</span></button></div>;
};
var BtnText_default = BtnText;

export {
  BtnText_default
};
