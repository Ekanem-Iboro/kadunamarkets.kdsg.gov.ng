import React from 'react'
import Head from 'next/head'
// import News from '../components/News'
import Header from '../components/Header'
import About_more from '../components/About_more'
import Footer from '../components/Footer'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

function news() {
  return (
    <>
      <Head>
        <title>News &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/logo.png" />

      </Head>

      <Header />
      
      <div className='w-screen h-[2vh]'></div>
      <Link href={"/about"}>
         <div className='fixed left-10 lg:left-20 top-[15vh] text-xl sm:text-sm px-5 py-3 bg-slate-200 text text-gray-900 cursor-pointer rounded'><FaArrowLeft/></div>
        </Link>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-40 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg> */}
      
      <h1 className='text-2xl font-bold mb-10'>More about KMDMC</h1>
      <p className="leading-relaxed text-lg mb-10"> Our mandate is to deliver excellence in our project developments and facility management
            services and with our team of experts we are changing the face of Kaduna one
            development at a time.
            With an increasing commercial hubs deficit in Kaduna, the Shops For All Initiative is
            KMDMC's drive to cater to the increasing demands of the 10 million residents of the State.
            Our needs assessment has confirmed these projects' viability with an initial expression of
            interest for 75% of all total lettable spaces.</p>
      <p className="leading-relaxed text-lg mb-10">
      In addition to growing urbanization and infrastructural development in Kaduna, According
            to the Statistician-General of the Federation (the commercial real estate sector has grown
            by 3.85% in the second half of 2021. Hence, investments in this sector hold good returns for
            investors.

            Our robust Public-Private Partnership and Ease of Doing Business frameworks have
            attracted investors to partner with us in developing projects such as the Galaxy Mall which
            is the first-ever mall in Kaduna, the rehabilitation of the Old KASUPDA Building to a GSM
            village, development of a 450 capacity Car Park, remodelling of Kasuwan Bacci, Sabon Gari
            Market and more. 
      </p>
      <p className="leading-relaxed text-lg mb-10">
      Kaduna Markets Development and Management Company (KMDMC) continues to report
            increasing IGR performance despite the Covid-19 pandemic. From an average revenue
            performance of 90.7% in previous years to a record high of 118% in 2019 and 109.5% in 2020.
            The company projects upwards of 2000% boost at the end of 2021, with projects like the
            sale of shops at Sheikh Abubakar Mahmoud Gumi Market, Kasuwan Magani, lease of
            Galaxy Mall, and sale of other built Public-Private Partnership (PPP) projects nearing
            completion. In the first half of 2021, the company had already achieved a record breaking
            revenue of over 400m, surpassing total annual revenue in any preceeding year.
            In early 2020, the Coronavirus pandemic (COVID-19) struck, plummeting all countries into
            uncertainty. The pandemic posed immense threats to healthcare economic systems and
            spurred a global shutdown of economic and social activities.
      </p>
      <p className="leading-relaxed text-lg mb-10">
      Nonetheless, KMDMC has been at the forefront of the Kaduna State response from the Government
            to the pandemic, deploying practical solutions that consider public health interest and
            commercial activities. Following the reopening of the State, we immediately commenced
            plans for receiving applications for the Sale of Shops at SAMG Market from traders with the
            right of first refusal.
            We have processed 7349 shop applications for the available 6,546 shops in the market out of
            which 4,673 have been allocated. Including Tax Clearance Certificate as a requirement for
            application contributed an estimated N85,635,000.00 to KADIRS Tax Clearance collections in
            2020/2021 and we have facilitated the registration of over 20,000 traders for the state
            residency card.
      </p>
      <p className="leading-relaxed text-lg mb-10">
      Verification of previous occupiers of markets like Kasuwan Bacci, Sabon Gari, Kawo Market,
            Kabala Market, Ungwan Rimi, and Kasuwan Magani has commenced in all markets under
            development. We have completed the 450 capacity parking lot at Sheikh Abubakar Gumi
            Market and converted the old KASUPDA building to a GSM Village; both facilities are now in
            use. We have sold out all 77 shops at Shops 54 and 56 Neighborhood Centres.
            Concurrently, our Project team is looking at safety measures- including global best practices
            and have reviewed our Development Lease Agreements to ensure a culture of maintenance
            and sustainability. We have plans to concession facilities like the Murtala Mohammed
            Square, Trailer Parks at Mararaban Jos, Tafa and the Green Agro Allied Industrial Zone
            (GAAIZ). The company also has among its asset portfolio, the Damau Household Milkfarm, a
            N10.5b project funded by the Commercial Agriculture Credit Scheme (CACS) of the Central
            Bank of Nigeria.
      </p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Tamar Nandul</h2>
      <p className="text-gray-500">Managing Director</p>
    </div>
  </div>
</section>

      {/* <div classNameName="container my-20 text-xl mx-auto px-40 sm:px-10 py-20 text-center text-gray-700 space-y-6">
        <Link href={"/about"}>
         <div classNameName='fixed left-15 top-[15vh] text-xl sm:text-sm px-5 py-3 bg-slate-200 text text-gray-900 cursor-pointer rounded'>Back</div>
        </Link>
         <h1 classNameName="text-2xl mb-8 font-extrabold">More on what we do</h1>
        <p classNameName='text-2xl md:text-xl sm:text-sm'>
            Our mandate is to deliver excellence in our project developments and facility management
            services and with our team of experts we are changing the face of Kaduna one
            development at a time.
            With an increasing commercial hubs deficit in Kaduna, the Shops For All Initiative is
            KMDMC's drive to cater to the increasing demands of the 10 million residents of the State.
            Our needs assessment has confirmed these projects' viability with an initial expression of
            interest for 75% of all total lettable spaces.
        </p>
        <p classNameName='text-2xl md:text-xl sm:text-sm'>
            In addition to growing urbanization and infrastructural development in Kaduna, According
            to the Statistician-General of the Federation (the commercial real estate sector has grown
            by 3.85% in the second half of 2021. Hence, investments in this sector hold good returns for
            investors.

            Our robust Public-Private Partnership and Ease of Doing Business frameworks have
            attracted investors to partner with us in developing projects such as the Galaxy Mall which
            is the first-ever mall in Kaduna, the rehabilitation of the Old KASUPDA Building to a GSM
            village, development of a 450 capacity Car Park, remodelling of Kasuwan Bacci, Sabon Gari
            Market and more. 
        </p>
        <p classNameName='text-2xl md:text-xl sm:text-sm'>
            Kaduna Markets Development and Management Company (KMDMC) continues to report
            increasing IGR performance despite the Covid-19 pandemic. From an average revenue
            performance of 90.7% in previous years to a record high of 118% in 2019 and 109.5% in 2020.
            The company projects upwards of 2000% boost at the end of 2021, with projects like the
            sale of shops at Sheikh Abubakar Mahmoud Gumi Market, Kasuwan Magani, lease of
            Galaxy Mall, and sale of other built Public-Private Partnership (PPP) projects nearing
            completion. In the first half of 2021, the company had already achieved a record breaking
            revenue of over 400m, surpassing total annual revenue in any preceeding year.
            In early 2020, the Coronavirus pandemic (COVID-19) struck, plummeting all countries into
            uncertainty. The pandemic posed immense threats to healthcare economic systems and
            spurred a global shutdown of economic and social activities.
        </p>

        <p classNameName='text-2xl md:text-xl sm:text-sm'>
            Nonetheless, KMDMC has been at the forefront of the Kaduna State Government’s response
            to the pandemic, deploying practical solutions that consider public health interest and
            commercial activities. Following the reopening of the State, we immediately commenced
            plans for receiving applications for the Sale of Shops at SAMG Market from traders with the
            right of first refusal.
            We have processed 7349 shop applications for the available 6,546 shops in the market out of
            which 4,673 have been allocated. Including Tax Clearance Certificate as a requirement for
            application contributed an estimated N85,635,000.00 to KADIRS Tax Clearance collections in
            2020/2021 and we have facilitated the registration of over 20,000 traders for the state
            residency card.
        </p>

        <p classNameName='text-2xl md:text-xl sm:text-sm'>
            Verification of previous occupiers of markets like Kasuwan Bacci, Sabon Gari, Kawo Market,
            Kabala Market, Ungwan Rimi, and Kasuwan Magani has commenced in all markets under
            development. We have completed the 450 capacity parking lot at Sheikh Abubakar Gumi
            Market and converted the old KASUPDA building to a GSM Village; both facilities are now in
            use. We have sold out all 77 shops at Shops 54 and 56 Neighborhood Centres.
            Concurrently, our Project team is looking at safety measures- including global best practices
            and have reviewed our Development Lease Agreements to ensure a culture of maintenance
            and sustainability. We have plans to concession facilities like the Murtala Mohammed
            Square, Trailer Parks at Mararaban Jos, Tafa and the Green Agro Allied Industrial Zone
            (GAAIZ). The company also has among its asset portfolio, the Damau Household Milkfarm, a
            N10.5b project funded by the Commercial Agriculture Credit Scheme (CACS) of the Central
            Bank of Nigeria.
        </p>
     </div> */}
      <div className='w-screen h-[20vh]'></div>
      <Footer />
    </>
  )
}

export default news