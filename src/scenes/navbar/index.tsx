import Logo from '@/assets/Logo.png'
import Link from '@/scenes/navbar/Link.tsx'
import {SelectedPage} from "@/shared/types.ts";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import {Bars3Icon} from "@heroicons/react/24/solid";
import {useState} from "react";

interface NavbarProps {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = (props: NavbarProps) => {
    const flexBetween = 'flex items-center justify-between'
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/*LEFT SIDE*/}
                        <img alt='logo' src={Logo} />

                        {/*RIGHT SIDE*/}
                        {isAboveMediumScreens
                            ? <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link page={SelectedPage.Home} selectedPage={props.selectedPage}
                                          setSelectedPage={props.setSelectedPage}/>
                                    <Link page={SelectedPage.Benefits} selectedPage={props.selectedPage}
                                          setSelectedPage={props.setSelectedPage}/>
                                    <Link page={SelectedPage.OurClasses} selectedPage={props.selectedPage}
                                          setSelectedPage={props.setSelectedPage}/>
                                    <Link page={SelectedPage.ContactUs} selectedPage={props.selectedPage}
                                          setSelectedPage={props.setSelectedPage}/>
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <button>Become a Member</button>
                                </div>
                            </div>
                            : <button className='rounded-full bg-secondary-500 p-2' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className='h-6 w-6 text-white' />
                            </button>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
