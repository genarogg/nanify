// src/components/btns/basic/BtnNormalBasic.tsx
var BtnNormalBasic = ({
  children,
  onClick,
  className = "",
  id
}) => {
  return <div className={`btn-normal-basic ${className}`} id={id}><button onClick={onClick}>{children}</button></div>;
};
var BtnNormalBasic_default = BtnNormalBasic;

export {
  BtnNormalBasic_default
};
