// src/components/btns/hamburguesa/BtnThor.tsx
var BtnThor = ({
  fn,
  isActive,
  setIsActive,
  className = " "
}) => {
  return <button
    onClick={() => {
      setIsActive(!isActive);
      fn && fn();
    }}
    className={`btn-thor ${className} ${isActive ? "active" : ""}`}
  ><span className="hamburguer">
    <span className="bar bar-1" />
    <span className="bar bar-2" />
    <span className="bar bar-3" />
  </span></button>;
};
var BtnThor_default = BtnThor;

export {
  BtnThor_default
};
