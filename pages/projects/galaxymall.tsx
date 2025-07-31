import NewHead from '../../components/NewHead'
import Footer from '../../components/Footer'
import { useRecoilState } from 'recoil'
import { modalState } from '../../atoms/Atom'
import Image from 'next/image'

function gallaxymall() {
  const [open, setOpen] = useRecoilState(modalState)

  return (
    <>
    <NewHead />

      <section className="text-gray-600 body-font mt-20">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">

          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Gallaxy Mall</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Construction of 1nr Anchor Tenants, 3nr cinemas, 6 restaurants, 48-line shops with over 360 nos and car parking bays with approximatly 8,834 square meters of gross lettable area within the mall</p>
          </div>

          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2 hover:cursor-pointer" >
                <Image width={500} height={300} alt="gallery" className="w-full object-cover h-full object-center block"src="/img/galaxymall/1.jpeg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={501} height={301} alt="gallery" className="w-full object-cover h-full object-center block hover:cursor-pointer" src="/img/galaxymall/2.jpeg"/>
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image width={800} height={390} alt="gallery" className="w-full h-full object-cover object-center block hover:cursor-pointer" src="/img/galaxymall/3.jpeg"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image width={800} height={390} alt="gallery" className="w-full h-full object-cover object-center block hover:cursor-pointer" src="/img/galaxymall/4.jpeg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={502} height={302} alt="gallery" className="w-full object-cover h-full object-center block hover:cursor-pointer" src="/img/galaxymall/5.jpeg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={503} height={303} alt="gallery" className="w-full object-cover h-full object-center block hover:cursor-pointer" src="/img/galaxymall/6.jpeg"/>
              </div>
            </div>
          </div>

          <div className="flex w-full mb-20 flex-wrap">
            {/* <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Welcome to Gallaxy Mall</h1> */}
            {/* <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p> */}
          </div>

          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2 hover:cursor-pointer">
                <Image width={500} height={300} alt="gallery" className="w-full object-cover h-full object-center block" src="/img/galaxymall/12.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={501} height={301} alt="gallery" className="w-full object-cover h-full object-center block hover:cursor-pointer" src="/img/galaxymall/13.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image width={800} height={390} alt="gallery" className="w-full h-full object-cover object-center block hover:cursor-pointer" src="/img/galaxymall/14.jpg"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image width={800} height={390} alt="gallery" className="w-full h-full object-cover object-center block hover:cursor-pointer" src="/img/galaxymall/15.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={502} height={302} alt="gallery" className="w-full object-cover h-full object-center block hover:cursor-pointer" src="/img/galaxymall/16.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={503} height={303} alt="gallery" className="w-full object-cover h-full object-center block hover:cursor-pointer" src="/img/galaxymall/17.jpg"/>
              </div>
            </div>
          </div>

        </div>
  </section>
  <Footer />
</>
  )
}

export default gallaxymall