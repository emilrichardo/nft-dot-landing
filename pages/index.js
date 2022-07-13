import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'


export default function Home() {
  return (

    <>
    <Head>
     <title>{ process.env.projectName}</title>
    </Head>
      <Layout>
        <div className='bg-secondary text-light  relative'>

          <div className='image-bg-hero absolute z-0 left-0 top-0 w-screen h-full'>
            <Image
            src="/images/bg-hero.jpg"
            width={1920}
            height={1432}
            layout="fill"
            objectFit="cover"
            />
          </div>


          <div className='hero relative z-10 min-h-screen flex flex-col justify-center px-8 text-center mx-auto'>
            <div className="row">
              <div className='logo-hero max-w-[182px] mx-auto'>
                <Image
                src="/images/logo-hero.png"
                width={692}
                height={693}
                />
              </div>
              <div className='caption'>
                <h2 className='text-3xl'> <span className='text-primary font-medium'>NFT-DOT</span> es la comunidad de la <span className='text-primary font-medium'>INNOVACIÓN</span></h2>
                <p className='mt-4 mb-6'>Únete a la comunidad especializada en tendencias blockchain, una de las innovaciones digitales más solidas de la web 3.0 y acumula increíbles beneficios.</p>
                <a className=' rounded-full bg-primary text-secondary font-semibold px-6 py-2' href="#">Comprar</a>
              </div>
            </div>
            <div className="social-buttons relative z-10 flex justify-center mt-10">
                <a href="#" className="icon-social mx-1">
                  <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.6 32.16H15.928V20.832H13.56V16.928H15.928V14.56C15.928 11.36 17.272 9.504 20.984 9.504H24.12V13.408H22.136C20.664 13.408 20.6 13.984 20.6 14.944V16.928H24.12L23.736 20.832H20.6V32.16Z" fill="#00FFFF"/>
                  </svg>
                </a>
                <a href="#" className="icon-social mx-1">
                  <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.2468 32.672C20.9828 32.672 17.7188 32.672 14.5188 32.672C14.1988 32.608 13.8788 32.544 13.4948 32.544C9.78281 32.352 7.03081 29.664 6.90281 25.952C6.77481 21.984 6.77481 18.016 6.90281 13.984C6.96681 10.72 9.14281 8.288 12.2788 7.584C12.9828 7.52 13.6868 7.456 14.3268 7.328C17.7188 7.328 21.1108 7.328 24.4388 7.328C24.7588 7.392 25.0148 7.456 25.3348 7.456C28.5348 7.648 30.9668 9.632 31.7348 12.768C31.9268 13.536 31.9908 14.304 32.0548 15.072C32.0548 18.336 32.0548 21.6 32.0548 24.8C31.9908 25.184 31.9268 25.568 31.9268 25.888C31.7348 29.088 29.7508 31.52 26.6148 32.288C25.8468 32.48 25.0148 32.544 24.2468 32.672ZM29.6868 20C29.6868 18.208 29.7508 16.416 29.6868 14.624C29.5588 11.616 27.8948 9.824 24.8228 9.76C21.2388 9.696 17.5908 9.696 14.0068 9.76C10.9348 9.824 9.20681 11.552 9.14281 14.624C9.07881 18.208 9.07881 21.792 9.14281 25.376C9.20681 28.512 10.9348 30.24 14.0708 30.304C17.6548 30.368 21.2388 30.368 24.8228 30.304C27.8308 30.24 29.5588 28.448 29.6228 25.504C29.7508 23.648 29.6868 21.792 29.6868 20Z" fill="#00FFFF"/>
                  <path d="M12.9188 19.936C12.9188 16.288 15.8628 13.472 19.4468 13.472C23.0948 13.472 25.9108 16.416 25.9108 20C25.8468 23.584 23.0308 26.464 19.3828 26.464C15.7988 26.464 12.9188 23.584 12.9188 19.936ZM19.4468 15.776C17.0788 15.776 15.2228 17.632 15.2228 19.936C15.2228 22.24 17.0788 24.16 19.3828 24.16C21.7508 24.16 23.6068 22.368 23.6708 20C23.6068 17.696 21.8148 15.84 19.4468 15.776Z" fill="#00FFFF"/>
                  <path d="M26.1668 11.744C27.0628 11.744 27.7028 12.384 27.7028 13.28C27.7028 14.112 26.9988 14.816 26.1668 14.816C25.3348 14.816 24.6308 14.112 24.6308 13.28C24.6308 12.384 25.3348 11.744 26.1668 11.744Z" fill="#00FFFF"/>
                  </svg>
                </a>
                <a href="#" className="icon-social mx-1">
                  <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.5256 11.552C32.5016 12 31.4136 12.32 30.3256 12.448C31.4776 11.744 32.3736 10.656 32.7576 9.37599C31.6696 10.016 30.4536 10.464 29.1736 10.72C28.1496 9.63199 26.6776 8.92799 25.0776 8.92799C22.0056 8.92799 19.4456 11.424 19.4456 14.56C19.4456 15.008 19.5096 15.456 19.5736 15.84C15.0296 15.52 10.9336 13.344 8.1176 9.95199C7.6056 10.784 7.3496 11.744 7.3496 12.768C7.3496 14.688 8.3096 16.416 9.8456 17.44C8.9496 17.44 8.0536 17.184 7.2856 16.736V16.8C7.2856 19.488 9.2056 21.792 11.7656 22.304C11.3176 22.432 10.8056 22.496 10.2936 22.496C9.9096 22.496 9.5896 22.432 9.2696 22.368C9.9736 24.608 12.0216 26.208 14.5176 26.272C12.5976 27.744 10.1656 28.64 7.5416 28.64C7.0936 28.64 6.6456 28.64 6.1976 28.576C8.6936 30.176 11.6376 31.072 14.7736 31.072C25.1416 31.072 30.7736 22.56 30.7736 15.136C30.7736 14.88 30.7736 14.624 30.7736 14.432C31.8616 13.664 32.8216 12.64 33.5256 11.552Z" fill="#00FFFF"/>
                  </svg>
                </a>
                <a href="#" className="icon-social mx-1">
                  <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.340424" width="37.4468" height="40" rx="5" fill="#00FFFF"/>
                  <path d="M32.0718 11.1009L28.1105 29.5665C27.8113 30.8697 27.0322 31.1943 25.9248 30.5797L19.8902 26.1831L16.9821 28.9503C16.8394 29.1337 16.6557 29.2819 16.4453 29.3834C16.235 29.4849 16.0037 29.5368 15.7697 29.5352L16.203 23.4588L27.3847 13.4702C27.8713 13.0418 27.2789 12.8037 26.6289 13.2329L12.8016 21.84L6.84868 19.998C5.55377 19.5985 5.53044 18.7178 7.11782 18.1033L30.3978 9.23585C31.4761 8.83631 32.4193 9.4731 32.0643 11.1009H32.0718Z" fill="#162668"/>
                  </svg>
                </a>
            </div>

          </div>


          <div className="desc relative z-10 px-8 py-12">
            <h3 className='text-2xl mb-4'>Suministro total de hasta <span className="text-primary font-medium">100M</span>  Distribuido de forma <span className="text-primary font-medium">estratégica</span></h3>
            <p>NFT-DOT es un desarrollo que permite y alienta la participación de todos los miembros de su comunidad para que debatan, propongan y acuerden cambios al interior del protocolo.</p>
          </div>

        </div>

      </Layout>
    </>







  )
}
