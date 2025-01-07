import React from 'react'
import './sass/_footer.scss'
import { LogoGenarogg, A, Icon } from 'nanify';
import { FaHourglassEnd } from "react-icons/fa6";

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div className="footerDesktop">
                <ul className='containerUl'>
                    <li className='col-1'>
                        <h6 className="logo">
                            <A href='/'>
                                alana
                            </A>
                        </h6>
                        <ul>
                            <li>
                                <label htmlFor="">
                                    lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </label>
                            </li>
                            <li>
                                <label>
                                    <Icon icon={<FaHourglassEnd />} />
                                    <span>Address:</span>
                                    <strong>1234 Fashion Street, Suite 567,New York, NY 10001</strong>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <Icon icon={<FaHourglassEnd />} />
                                    <span>Email:</span>
                                    <strong>info@fashionshop.com</strong>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <Icon icon={<FaHourglassEnd />} />
                                    <span>Phone:</span>
                                    <strong>(212) 555-1234</strong>
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li className='col-2'>
                        <h6>Help</h6>
                        <ul>
                            <li>
                                <A href='/'>
                                    <Icon icon={<FaHourglassEnd />} />
                                    <span>Order Status</span>
                                </A>
                            </li>
                            <li>
                                <A href='/'>
                                    <Icon icon={<FaHourglassEnd />} />
                                    <span>Returns + Exchanges</span>
                                </A>
                            </li>
                            <li>
                                <A href='/'>
                                    <Icon icon={<FaHourglassEnd />} />
                                    <span>Shipping</span>
                                </A>
                            </li>
                            <li>
                                <A href='/'>
                                    <Icon icon={<FaHourglassEnd />} />
                                    <span>Terms + Conditions</span>
                                </A>
                            </li>
                            <li>
                                <A href="/">
                                    <Icon icon={<FaHourglassEnd />} />
                                    <span>FAQ’s</span>
                                </A>
                            </li>
                            <li>
                                <A href="/">
                                    <Icon icon={<FaHourglassEnd />} />
                                    <span>Compare</span></A>
                            </li>
                            <li>
                                <A href="/">
                                    <Icon icon={<FaHourglassEnd />} />
                                    <span>My Wishlist</span>
                                </A>
                            </li>

                        </ul>
                    </li>
                    <li className='col-3'>
                        <h6>About us</h6>
                        <ul>
                            <li>
                                <A href="/">
                                    <Icon icon={<FaHourglassEnd />} />
                                    <span>My Wishlist</span>
                                </A>
                            </li>
                            <li>
                                <A href="/">
                                    <Icon icon={<FaHourglassEnd />} />
                                    <span>My Wishlist</span>
                                </A>
                            </li>
                            <li>
                                <A href="/">
                                    <Icon icon={<FaHourglassEnd />} />
                                    <span>My Wishlist</span>
                                </A>
                            </li>
                            <li>
                                <A href="/">
                                    <Icon icon={<FaHourglassEnd />} />
                                    <span>My Wishlist</span>
                                </A>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="footerDown">
                <div className="left">
                <p>© {currentYear} alana. Todos los derechos reservados.</p>
                </div>
                <div className="right">
                    <div className="redes">
                        <ul>
                            <li>
                                <A type="a" href="A">
                                    <Icon icon={<FaHourglassEnd />} />
                                </A>
                            </li>
                            <li>
                                <A type="a" href="#">
                                    <Icon icon={<FaHourglassEnd />} />
                                </A>
                            </li>
                            <li>
                                <A type="a" href="#">
                                    <Icon icon={<FaHourglassEnd />} />
                                </A>
                            </li>
                            <li>
                                <A type="a" href="#">
                                    <Icon icon={<FaHourglassEnd />} />
                                </A>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;