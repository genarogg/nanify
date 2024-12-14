// src/components/btns/basic/BtnSubmitBasic.tsx
var BtnSubmitBasic = ({
  text,
  className = "",
  id,
  disable = false,
  onClick
}) => {
  return <div className={`btn-submit-basic ${className}`} id={id}><button disabled={disable} onClick={onClick && (() => onClick())}>{text}</button></div>;
};
var BtnSubmitBasic_default = BtnSubmitBasic;

export {
  BtnSubmitBasic_default
};
