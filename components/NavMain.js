import Link from "next/link";
import { useRouter } from 'next/router'


export default function Test({className,itemClassName,MenuToggleSwitch}) {

const router = useRouter();
const { locale } = router;

const newLink = locale == "en" ? "https://disruptivenews.io/" : "https://disruptivenews.io/es/"


const mainMenuItems = [
    {"id":0 ,"label":`${locale =='en' ? "Home" : "Inicio"}` , "link" : "#home" },
    {"id":1 ,"label":`${locale =='en' ? "About us" : "Sobre nosotros"}` , "link" : "#about" },
    {"id":3 ,"label":`${locale =='en' ? "Roadmap" : "Mapa de ruta"}`, "link" : "#roadmap" },

]


    return(
        <nav  className={`${className} font-title_bold flex flex-col lg:flex-row  "`}>
            {mainMenuItems.map((item)=>(
                <span key={item.id}>
                {item.target == "blank"
                ?
                <a   href={item.link} target="_blank" rel="noreferrer"  onClick={MenuToggleSwitch}  className={`${router.asPath == item.link && " text-primary-light " + " "} ${itemClassName} my-4 hover:text-primary inline-block hover:scale-105 transition-all duration-200`}>{item.label}</a>
                :
                <Link   href={item.link} ><a onClick={MenuToggleSwitch}  className={`${router.asPath == item.link && " text-primary-light " + " "} ${itemClassName}  selection: hover:text-primary inline-block hover:scale-105 transition-all duration-200`}>{item.label}</a></Link>

                }
                </span>
            ))}
        </nav>
    )
};
