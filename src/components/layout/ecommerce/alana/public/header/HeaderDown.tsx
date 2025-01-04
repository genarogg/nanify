import React from 'react';
import { Img, Icon, A } from 'nanify';
import { FaRegHeart } from "react-icons/fa";
import imgMen from "/public/men.jpg";

import HeaderToolTip from '../../../../tooltip/HeaderToolTip';

interface HeaderDownProps {
    // data: Array<{
    //     title: string;
    //     type: string;
    //     src: string;
    //     alt: string;
    //     subcategories: Array<{
    //         name: string;
    //         items: Array<{
    //             imgSrc: string;
    //             imgAlt: string;
    //             label: string;
    //         }>
    //     }>
    // }>;
    data: any;
}

const HeaderDown: React.FC<HeaderDownProps> = ({ data }) => {
    const MoreCategories = () => (
        <A href="#" className="containerCategori">
            <Icon icon={<FaRegHeart />} />
            <h6>Ver más!</h6>
        </A>
    );

    const Li = ({ imgSrc, imgAlt, label }: { imgSrc: string; imgAlt: string; label: string }) => (
        <li className='slideIn'>
            <Img
                type="local"
                src={imgSrc}
                width={80}
                height={80}
                alt={imgAlt}
                className='imgCategoria'
                visible={false}
            />
            <h6>{label}</h6>
        </li>
    );

    const SubCategoria = ({ name, items }: { name: string; items: Array<{ imgSrc: string; imgAlt: string; label: string }> }) => (
        <div className="subCategoria">
            <h5 className='slideIn'>{name}</h5>
            <nav>
                <ul>
                    <li className='slideIn'>
                        <MoreCategories />
                    </li>
                    {items.map((item, index) => (
                        <Li key={index} imgSrc={item.imgSrc} imgAlt={item.imgAlt} label={item.label} />
                    ))}
                </ul>
            </nav>
        </div>
    );

    const ContainerLeft = ({ containerLeft }: any) => (
        <div className="containerLeft">
            <Img
                type={containerLeft.type}
                src={containerLeft.src}
                alt={containerLeft.alt}
                width={400}
                height={400}
                visible={false}
            />
        </div>
    );

    const NavToolTip = ({ title, containerLeft, subcategories }: any) => (
        <li>
            <HeaderToolTip title={title}>
                <div className="containerCategoria">
                    <ContainerLeft containerLeft={containerLeft} />
                    {/* <div className="categorias">
                        {subcategories.map((sub, index): any => (
                            <SubCategoria key={index} name={sub.name} items={sub.items} />
                        ))}
                    </div> */}
                </div>
            </HeaderToolTip>
        </li>
    );

    return (
        <div className="headerDown">
            <nav className='navToolTip'>
                <ul>
                    {data.map((category: any, index: any) => (
                        <NavToolTip
                            key={index}
                            title={category.title}
                            containerLeft={category.containerLeft}
                            subcategories={category.subcategories}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default HeaderDown;
