// src/components/btns/hamburguesa/BtnFreya.tsx
var BtnFreya = ({
  fn,
  isActive,
  setIsActive,
  className = ""
}) => {
  return <button
    onClick={() => {
      setIsActive(!isActive);
      fn && fn();
    }}
    className={`btn-freya ${className} ${isActive ? "active" : ""}`}
  ><span /></button>;
};
var BtnFreya_default = BtnFreya;

export {
  BtnFreya_default
};
