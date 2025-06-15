interface SpinnerProps {}
import "./spinner.css";

const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <div className="spinner-container">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
