import { motion } from 'framer-motion'
import Footer from './Footer'

type Props = {}

function Publications({}: Props) {
  return (
  <>
    {/* <div classNameNameName='mt-40'>Publicction body</div>
    <a 
    href='files/KMDMCInvestmentDistribution.pdf' 
    // alt="alt text"
    target="_blank"
    rel="noopener noreferrer"
    classNameName="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download PDF</a>
     */}

<section className="text-gray-600 body-font h-screen mt-20 mb-40">
  <div className="container px-5 py-24 mx-auto">
    <h1 className='text-2xl my-10  lg:my-20 text-center font-black tracking-[4px] lg:text-5xl lg:tracking-[8px] font-serif'>Official Publications</h1>
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">


    <motion.div 
        initial= {{
        x: -80,
        opacity: 0
         }}
        transition= {{duration: 1}}
        whileInView= {{ opacity: 1, x: 0}}
        viewport= {{ once: true}}
      className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="/report.PNG"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">KMDMC 2022 Annual report</h2>
        <p className="leading-relaxed text-base">This report contains a comprehensive summary of Kaduna Markets Developement and Management Company and it's activities as well as achievements on the year 2022.</p>
        <a 
          href="files/Annual-Report.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex mx-auto mt-6 w-40 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
            Download PDF
        </a>
        {/* <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
      </motion.div>


    <motion.div 
        initial= {{
        x: -80,
        opacity: 0
         }}
        transition= {{duration: 1}}
        whileInView= {{ opacity: 1, x: 0}}
        viewport= {{ once: true}}
      className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="/tumb/brouchure.PNG"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">KMDMC Tradefair 2.0 Brochure</h2>
        <p className="leading-relaxed text-base">The fair is a bi-annual event organized by the Kaduna Markets
Development and Management Company (KMDMC) to provide a
platform for Micro, Small and Medium Enterprises (MSME's) within Kaduna State to showcase and promote their goods and services to residents.</p>
        <a 
          href="files/tradefair.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex mx-auto mt-6 w-40 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
            Download PDF
        </a>
        {/* <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
      </motion.div>

      <motion.div 
        initial= {{
        x: -80,
        opacity: 0
         }}
        transition= {{duration: 1}}
        whileInView= {{ opacity: 1, x: 0}}
        viewport= {{ once: true}}
      className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="/tumb/tumbMidYear.PNG"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">KMDMC Mid-Year 2020 Report</h2>
        <p className="leading-relaxed text-base">This document provide details about the different ongoing projects as at mid-2020 under the outlines; Leasure and Recreation, Markets, Neighbourhood Centres, Facility Upgrades and other projects including the Sale of Shops at Sheikh Abubakar Gumi Market and the Damau Household Milk farm Project.</p>
        <a 
          href="files/TradefairBrochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex mx-auto mt-6 w-40 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
            Download PDF
        </a>
        {/* <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
      </motion.div>
      <motion.div 
      initial= {{
        x: 80,
      opacity: 0
      }}
      transition= {{duration: 1}}
      whileInView= {{ opacity: 1, x: 0}}
      viewport= {{ once: true}}
      className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="/tumb/tumbAnualPerformance.PNG"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">2019 Annual Performance Report</h2>
        <p className="leading-relaxed text-base">This document explores the overview, structure and business model of KMDMC, challenges facing our vision to provide quality services in an efficient and professional manner and how we are reponding, ongoing projects, 2020 budgets and many more.</p>
        <a 
          href="files/AnnualPerformanceReport.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex mx-auto mt-6 w-40 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
            Download PDF
        </a>
        {/* <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
      </motion.div>
      <motion.div 
      initial= {{
        x: -80,
        opacity: 0
         }}
        transition= {{duration: 1}}
        whileInView= {{ opacity: 1, x: 0}}
        viewport= {{ once: true}}
      className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="/tumb/tumbMarketsReport.PNG"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Market Decentralization Report</h2>
        <p className="leading-relaxed text-base">The Market Decentralization Exercise entailed setting up temporary neighbourhood markets in public school facilities to limit inter-community movements and mitigate the outspread of COVID-19 without jeopardizing the access to food and essential items.</p>
        <a 
          href="files/MarketDecentralizationReport.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex mx-auto mt-6 w-40 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
            Download PDF
        </a>
        {/* <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
      </motion.div>
      <motion.div 
      initial= {{
        x: 80,
      opacity: 0
      }}
      transition= {{duration: 1}}
      whileInView= {{ opacity: 1, x: 0}}
      viewport= {{ once: true}}
      className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="/tumb/tumb001.PNG"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">KMDMC Investment Distribution</h2>
        <p className="leading-relaxed text-base">This document details the Capital Projects funded through KDSG capital injection, Public Private Partnership Projects funded through PPP investment and the Jobs created through these projects</p>
        <a 
          href="files/KMDMCInvestmentDistribution.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex mx-auto mt-6 w-40 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
            Download PDF
        </a>
        {/* <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
      </motion.div>
    </div>
  </div>
  <Footer/>
</section>    
</>
  )
}

export default Publications