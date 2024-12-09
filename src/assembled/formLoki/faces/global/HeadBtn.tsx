import { $ } from "@fn";
import { BtnText } from "nanify"

interface HeadBtnProps {
    cardState: (css: string) => void;
}

const HeadBtn: React.FC<HeadBtnProps> = ({ cardState }) => {
    const btnActive = () => {
        $("containerFormLoki")?.classList.add("active");

        //quita la clase active despues de 3 segundos
        setTimeout(() => {
            $("containerFormLoki")?.classList.remove("active");
        }, 1000);
    };

    return (
        <div className="btn-sesion">
            <BtnText
                text="Iniciar sesión"
                onClick={() => {
                    cardState("front-active");
                    btnActive();
                }}
            />
            <span className="span-sesion">|</span>
            <BtnText
                text="Registrarse"
                onClick={() => {
                    cardState("right-active");
                    btnActive();
                }}
            />
        </div>
    );
};

export default HeadBtn;
