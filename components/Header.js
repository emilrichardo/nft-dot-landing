import React, { useState, useEffect } from "react";
import Button from "./buttons";

import MenuOverlay from "./MenuOverlay";
import {useWindowSize} from "./DetectWSize"

import Link from "next/link";
import NavMain from "./NavMain"
import { useRouter } from 'next/router';
import ChangeLang from "./ChangeLang";
import Image from "next/image";




export default function Header({className}) {
  const router = useRouter();
  const { locale } = router;



    //menu
    const [menuOverlay, setMenuOverlay] = useState(false)

    const MenuToggleSwitch = () => {
        menuOverlay ? setMenuOverlay(false) : setMenuOverlay(true);
      };

      //panel stake
      const [slidePanel, setSlidePanel] = useState(false);
      const PanelToggleSwitch = () => {
        slidePanel ? setSlidePanel(false) : setSlidePanel(true);
      };


      //scroll

      const [scrolled, setScrolled] = useState(false);
      // change state on scroll
      useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 10;
          if (isScrolled !== scrolled) {
            setScrolled(!scrolled);
          }
        };

        document.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
          // clean up the event handler when the component unmounts
          document.removeEventListener("scroll", handleScroll);
        };
      }, [scrolled]);



        //detect window size width height
    const size = useWindowSize();




    return(
        <header className={`main-header bg-dark-dark text-light ${className && className} ${scrolled && " bg-opacity-80 "} transition-all  px-4 py-2  fixed top-0 w-screen  z-30 `}>
          <div className="container">
            <div className="flex justify-between items-center">
              <Link href="/">
                <a>
                  <Image
                  src="/images/logo.svg"
                  width={133}
                  height={40}
                  className="scale-75 lg:scale-100"
                  />
                </a>
                </Link>




                <div className="ml-auto flex">
                  <div className=" lg:order-3"><ChangeLang/></div>

                  <div className="flex items-center order-2" >
                    {size.width  >   1024
                    ?
                    <NavMain  className="hidden lg:inline-block uppercase text-sm font-title tracking-wider" itemClassName="mr-8"/>
                    :
                    <MenuOverlay  menuState={menuOverlay} MenuToggleSwitch={MenuToggleSwitch} />
                    }

                      <Button onClick={MenuToggleSwitch} onKeyDown={MenuToggleSwitch} size="sm" className="lg:hidden relative   py-3">
                          <div className={`   w-6 transition-all relative h-[2px]  bg-light `}></div>
                          <div className={`   w-6transition-all h-[2px]   bg-light mt-[7px] `}></div>
                      </Button >
                  </div>

                </div>

            </div>

          </div>




        </header>
    )
};
