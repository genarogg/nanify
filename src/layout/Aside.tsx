'use client'
import React from 'react'
import { A } from '@/components/nano'

interface AsideProps {

}

const Aside: React.FC<AsideProps> = () => {

    const LI = ({ text, link }: any) => {
        return (<li><A href={link}>{text}</A></li>)
    }
    return (
        <aside className="layout-aside">
            <nav>
                <ul>
                    <li>

                        <A href="/nano"><h4>nano</h4></A>
                        <ul>
                            <LI link="/nano/a" text="A" />
                            <LI link="/nano/img" text="img" />
                            <li><A href="/nano/nanify">nanify</A></li>
                            <li><A href="/nano/squeleto">squeleto</A></li>

                        </ul>
                    </li>

                    <li>
                        <A href="/ux"><h4>ux</h4></A>
                        <ul>
                            <LI link="ux/badge" text="badge" />
                            <li><A href="/ux/btns">btns</A></li>
                            <li><A href="/ux/icon">icon</A></li>
                            <li><A href="/ux/input">input</A></li>
                            <li><A href="/ux/input-file">input-file</A></li>
                            <li><A href="/ux/input-list">input-list</A></li>
                            <li><A href="/ux/modal">modal</A></li>
                            <li><A href="/ux/select">select</A></li>
                            <li><A href="/ux/tabs">tabs</A></li>
                            <li><A href="/ux/textarea">textarea</A></li>
                        </ul>
                    </li>

                    <li>

                        <A href="/slider"><h4>slider</h4></A>
                        <ul>
                            <LI link="/slider/slider-background" text="slider-bg" />


                        </ul>
                    </li>
                    <li>

                        <A href="/form"><h4>form</h4></A>
                        <ul>
                            <LI link="/form/loki" text="form-loki" />


                        </ul>
                    </li>
                    <li>

                        <A href="/sections"><h4>sections</h4></A>
                        <ul>
                            <LI link="/sections/three-columns" text="three-columns" />
                            <LI link="/sections/two-columns" text="two-columns" />
                            <li><A href="/sections/simple-title">simple-title</A></li>

                        </ul>
                    </li>
                    <li>

                        <A href="/wrapper"><h4>wrapper</h4></A>
                        <ul>
                            <LI link="/wrapper/particulas" text="particulas" />
                            <LI link="/wrapper/grid" text="grid" />
                            <li><A href="/wrapper/animated-background">animated-background</A></li>

                        </ul>
                    </li>
                    <li>
                        <h4>Varios</h4>
                        <ul>
                            <li><A href="/gravatar">gravatar</A></li>
                            <LI link="/tablet" text="tablet" />
                            <LI link="/youtube" text="youtube" />
                            <LI link="/tooltip" text="tooltip" />

                        </ul>
                    </li>
                    {/* <li>
                        <h4>Varios</h4>
                        <ul>
                            <li><A href="/gravatar">gravatar</A></li>
                            <li><a href="#">Subsección 2.2</a></li>
                            <li>
                                Subnivel
                                <ul>
                                    <li><a href="#">Nivel 3.1</a></li>
                                    <li><a href="#">Nivel 3.2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}

                </ul>
            </nav>
        </aside>
    );
}

export default Aside;