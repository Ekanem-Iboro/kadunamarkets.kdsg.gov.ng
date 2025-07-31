import NewHead from '../../components/NewHead'
import Image from 'next/image'
import Footer from '../../components/Footer'


function olarm() {
  return (
    <>
    <NewHead />
     

      <section className="text-gray-600 body-font mt-20">
        <div className="container px-5 pt-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Murtala Muhammed Square</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">KMDMC undertook the remodeling of the square in 2019 as part of the KDSG’s Urban Renewal Programme, also to improve sports development among our youths and provide conducive avenue for residents to exercise and keep fit. The world class facility contains:</p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image width={500} height={300} alt="gallery" className="w-full object-cover h-full object-center block" src="/img/msquare/1.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={501} height={301} alt="gallery" className="w-full object-cover h-full object-center block" src="/img/msquare/3.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image width={800} height={390} alt="gallery" className="w-full h-full object-cover object-center block" src="/img/msquare/15.jpg"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image width={800} height={390} alt="gallery" className="w-full h-full object-cover object-center block" src="/img/msquare/11.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={502} height={302} alt="gallery" className="w-full object-cover h-full object-center block" src="/img/msquare/12.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={503} height={303} alt="gallery" className="w-full object-cover h-full object-center block" src="/img/msquare/7.jpg"/>
              </div>
            </div>
          </div>
        </div>
  </section>

  <section className="text-gray-600 body-font mt-20">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Welcome to Olam Farms Trailer Park and Grains Market</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Construction of Parking Bays for 120 trailers, Grains Market, Travelers Inn, Food Court, Warehouses and Mechanic Workshops.</p>
          </div> */}
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image width={500} height={300} alt="gallery" className="w-full object-cover h-full object-center block" src="/img/msquare/12.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={501} height={301} alt="gallery" className="w-full object-cover h-full object-center block" src="/img/msquare/13.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image width={800} height={390} alt="gallery" className="w-full h-full object-cover object-center block" src="/img/msquare/20.jpg"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image width={800} height={390} alt="gallery" className="w-full h-full object-cover object-center block" src="/img/msquare/15.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={502} height={302} alt="gallery" className="w-full object-cover h-full object-center block" src="/img/msquare/19.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={503} height={303} alt="gallery" className="w-full object-cover h-full object-center block" src="/img/msquare/17.jpg"/>
              </div>
            </div>
          </div>
        </div>
  </section>
  <Footer />
</>
  )
}

export default olarm