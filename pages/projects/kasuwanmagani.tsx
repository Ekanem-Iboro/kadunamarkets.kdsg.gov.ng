import NewHead from '../../components/NewHead'
import Image from 'next/image'
import Footer from '../../components/Footer'

function kasuwanmagani() {
  return (
    <>
        <NewHead />

    <div className="h-[20vh]"></div>
      <section className="text-gray-600 body-font mt-20">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Kasuwan Magani</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Construction of 2024 shops, stalls, abattoirs, warehouses, banks, toilets, police station and parking lots.</p>
          </div>

          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
                <Image width={500} height={300} alt="gallery" className="w-full object-cover h-full object-center block hover:cursor-pointer scale-100" src="/img/kasuwanmagani/7.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={501} height={301} alt="gallery" className="w-full object-cover h-full object-center block hover:cursor-pointer scale-100" src="/img/kasuwanmagani/8.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image width={800} height={390} alt="gallery" className="w-full h-full object-cover object-center block hover:cursor-pointer scale-100" src="/img/kasuwanmagani/9.jpg"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image width={800} height={390} alt="gallery" className="w-full h-full object-cover object-center block hover:cursor-pointer scale-100" src="/img/kasuwanmagani/10.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={502} height={302} alt="gallery" className="w-full object-cover h-full object-center block hover:cursor-pointer scale-100" src="/img/kasuwanmagani/11.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={503} height={303} alt="gallery" className="w-full object-cover h-full object-center block hover:cursor-pointer scale-100" src="/img/kasuwanmagani/12.jpg"/>
              </div>
            </div>
          </div>
        </div>
  </section>
  <div className="h-[20vh]"></div>
  <Footer />
</>
  )
}

export default kasuwanmagani