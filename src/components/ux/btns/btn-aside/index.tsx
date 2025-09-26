import "./aside.css"

interface AsideBtnProps {
    className?: string
    onClick?: () => any

}

const AsideBtn = ({ className = "", onClick }: AsideBtnProps) => {
    const active = () => {
        document.getElementById("btnAsideArrow")?.classList.toggle("active")
    }

    return (
        <div
            className={`btn-aside ${className}`}
            onClick={() => {
                active()
                onClick && onClick()
            }}
        >
            <div className="btn-aside__rectangle"></div>
            <div className="btn-aside__divider"></div>
            <div className="btn-aside__arrow" id="btnAsideArrow"></div>
        </div>
    )
}

export default AsideBtn 