import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from "next/image"

function Banner02() {

    return (
        <div className='relative w-screen h-[20vh] md:h-[45vh] overflow-y-hidden'>
            <div className='absolute w-full h-10 md:h-40 bg-gradient-to-t from-[#f1f5f9] to-transparent bottom-0 z-20' />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div className=''>
                    <Image loading="lazy" src="/img/banner/1.jpeg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700} />
                </div>
                <div>
                    {/* <img loading="lazy" src="/img/banner/2.jpg" alt="" /> */}
                    <Image loading="lazy" src="/img/banner/2.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700} />
                </div>
                <div>
                    {/* <img loading="lazy" src="/img/banner/3.jpg" alt="" /> */}
                    <Image loading="lazy" src="/img/banner/3.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700} />
                </div>
                <div>
                    {/* <img loading="lazy" src="/img/banner/4.jpg" alt="" /> */}
                    <Image loading="lazy" src="/img/banner/4.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700} />
                </div>
                <div>
                    {/* <img loading="lazy" src="/img/banner/5.jpg" alt="" /> */}
                    <Image loading="lazy" src="/img/banner/5.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700} />
                </div>
                <div>
                    {/* <img loading="lazy" src="/img/banner/6.jpg" alt="" /> */}
                    <Image loading="lazy" src="/img/banner/6.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700} />
                </div>
                <div>
                    {/* <img loading="lazy" src="/img/banner/6.jpg" alt="" /> */}
                    <Image loading="lazy" src="/img/banner/7.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700} />
                </div>
                <div>
                    {/* <img loading="lazy" src="/img/banner/6.jpg" alt="" /> */}
                    <Image loading="lazy" src="/img/banner/8.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700} />
                </div>
                <div>
                    {/* <img loading="lazy" src="/img/banner/6.jpg" alt="" /> */}
                    <Image loading="lazy" src="/img/banner/9.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700} />
                </div>
                <div>
                    {/* <img loading="lazy" src="/img/banner/6.jpg" alt="" /> */}
                    <Image loading="lazy" src="/img/banner/10.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700} />
                </div>
                <div>
                    {/* <img loading="lazy" src="/img/banner/6.jpg" alt="" /> */}
                    <Image loading="lazy" src="/img/banner/11.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700} />
                </div>
                <div>
                    {/* <img loading="lazy" src="/img/banner/6.jpg" alt="" /> */}
                    <Image loading="lazy" src="/img/banner/12.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700} />
                </div>
                <div>
                    {/* <img loading="lazy" src="/img/banner/6.jpg" alt="" /> */}
                    <Image loading="lazy" src="/img/banner/13.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700} />
                </div>
                <div>
                    {/* <img loading="lazy" src="/img/banner/6.jpg" alt="" /> */}
                    <Image loading="lazy" src="/img/banner/14.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700} />
                </div>
                <div>
                    {/* <img loading="lazy" src="/img/banner/6.jpg" alt="" /> */}
                    <Image loading="lazy" src="/img/banner/15.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700} />
                </div>
                <div>
                    {/* <img loading="lazy" src="/img/banner/6.jpg" alt="" /> */}
                    <Image loading="lazy" src="/img/banner/16.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700} />
                </div>
            </Carousel>
        </div>
    )
}


export default Banner02