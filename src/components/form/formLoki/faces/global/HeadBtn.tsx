import { $ } from "../../../../functions/index";
import { BtnText } from "nanify"

interface HeadBtnProps {
    cardState: (css: string) => void;
    register?: boolean;
}

const HeadBtn: React.FC<HeadBtnProps> = ({ cardState, register }) => {
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
            {register && (
                <>
                    <span className="span-sesion">|</span>
                    <BtnText
                        text="Registrarse"
                        onClick={() => {
                            cardState("right-active");
                            btnActive();
                        }}
                    />
                </>
            )
            }
        </div>
    );
};

export default HeadBtn;
