import footer from "../Image/footer.jpg"
import logo from '../Image/logo.png'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
const BannerImg={
    backgroundImage:`url(${footer})`,
    backgroundPosition:"bottom",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%"
}
const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

export const Footer = () => {
  return (
    <div style={BannerImg} className='text-white mb-20'>
        <div className='container'>
            <div data-aos="zoom-in" className='grid md:grid-cols-3 py-44 pt-4'>
                {/* company details */}
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3' > 
                        <img src={logo} alt="" className='max-w-[50px]'/> Shopsy
                    </h1>
                    <p>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Architecto 
                        at eligendi officia dolorum, dolor quam.</p>
                </div>
                {/* fonter links  */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'></h1>
                                Important Links
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((link,index)=>(
                                            <li className='cursor-pointer hover:primary hover:translate-x-1
                                            duration-300 text-gray-300' key={index}>
                                                <span>{link.title}</span>
                                            </li> 
                                        ))
                                    }
                                </ul>
                        </div>
                    </div>
                    {/* social links */}
                    <div>
                        <div className='flex items-center gap-3 mt-6'>
                            <a href="">
                                <FaInstagram className="text-3xl"/> 
                                <FaFacebook className="text-3xl"/> 
                                <FaLinkedin className="text-3xl"/> 
                                
                            </a>
                        </div>
                        <div className='mt-6'>
                            <div className='flex items-center gap-6'>
                                <FaLocationArrow/>
                                <p>Noida,UttarPradesh</p>
                            </div>
                            <div className='flex items-center gap-6'>
                                <FaMobileAlt/>
                                <p>+91 123456789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
