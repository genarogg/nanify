interface Btn3HamburguesProps {
  fn?: () => void;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  className?: string;
}

const Btn3Hamburgues: React.FC<Btn3HamburguesProps> = ({
  fn,
  isActive,
  setIsActive,
  className = " ",
}) => {
  return (
    <button
      onClick={() => {
        setIsActive(!isActive);
        fn && fn();
      }}
      className={`hamburguer3 ${className} ${isActive ? "active" : ""}`}
    >
      <span className="hamburguer">
        <span className="bar bar-1"></span>
        <span className="bar bar-2"></span>
        <span className="bar bar-3"></span>
      </span>
    </button>
  );
};

export default Btn3Hamburgues;
