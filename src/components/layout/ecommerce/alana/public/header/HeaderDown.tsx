import React from 'react'
import { Img, Icon, A } from 'nanify';

import { FaRegHeart } from "react-icons/fa";
import imgMen from "/public/men.jpg"

import HeaderToolTip from '../../../../tooltip/HeaderToolTip';

interface HeaderDownProps {

}

const HeaderDown: React.FC<HeaderDownProps> = () => {
    const MoreCategories = () => {
        return (

            <A href="#" className="containerCategori">
                <Icon icon={<FaRegHeart />} />
                <h6>Ver mas!</h6>
            </A>

        )
    }

    const Li = () => {
        return (
            <li className='slideIn'>
                <Img
                    type="local"
                    src={imgMen}
                    width={80}
                    height={80}
                    alt="demo"
                    className='imgCategoria'
                    visible={false}
                />
                <h6>ropa</h6>
            </li>
        )
    }

    const SubCategoria = () => {
        return (
            <div className="subCategoria">
                <h5 className='slideIn'>ropa</h5>
                <nav>
                    <ul>
                        <li className='slideIn'>
                            <MoreCategories />
                        </li>
                        <Li />
                        <Li />
                    </ul>
                </nav>
            </div>
        )
    }

    const ContainerLeft = ({ type, src, alt }: any) => {
        return (
            <div className="containerLeft">
                <Img
                    type={type}
                    src={src}
                    alt={alt}
                    width={400}
                    height={400}
                    visible={false} />
            </div>
        )
    }


    const NavToolTip = () => {
        return (
            <li>
                <HeaderToolTip title='hombres'>
                    <div className="containerCategoria">
                        <ContainerLeft />
                        <div className="categorias">
                            <SubCategoria />
                        </div>
                    </div>
                </HeaderToolTip>
            </li>
        )
    }

    return (
        <div className="headerDown">
            <nav className='navToolTip'>
                <ul>
                    <NavToolTip  />
                </ul>
            </nav>
        </div>
    );
}

export default HeaderDown;