import orange from "../Image/orange.jpg"
const BannerImg={
    backgroundImage:`url(${orange})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
}
export const Suscribre = () => {
  return (
    <div data-aos="zoom-in"
    className='bg-gray-100 dark:bg-gray-800 text-white mb-20'
    style={BannerImg}>
        <div data-aos='Zoom-in'
        className='container backdrop-blur-sm py-10'>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1 
                className='text-xl text-center sm:text-left  sm:text-4xl
                font-semibold'>Obtenir Les Notifications Concernant Les Nouveau Produits
                </h1>
                <input type="text" data-aos="fade-up" placeholder='entre ton email'
                className='w-full p-3' />
            </div>
        </div>
    </div>
  )
}
