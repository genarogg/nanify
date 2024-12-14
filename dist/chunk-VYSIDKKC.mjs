// src/components/btns/hamburguesa/BtnLoki.tsx
var BtnLoki = ({
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
    className={`
                  btn-loki btn-menu 
                  ${className} 
                  ${isActive ? "active" : ""}
                `}
  >
    <span />
    <span />
    <span />
  </button>;
};
var BtnLoki_default = BtnLoki;

export {
  BtnLoki_default
};
