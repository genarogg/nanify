interface Btn2HamburguesProps {
  fn?: () => void;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  className?: string;
}

const Btn2Hamburgues: React.FC<Btn2HamburguesProps> = ({
  fn,
  isActive,
  setIsActive,
  className = "",
}) => {
  return (
    <button
      onClick={() => {
        setIsActive(!isActive);
        fn && fn();
      }}
      className={`hamburguer2 ${className} ${isActive ? "active" : ""}`}
    >
      <span></span>
    </button>
  );
};

export default Btn2Hamburgues;
