// import { async } from "@firebase/util"
// import { getSession } from "next-auth/client"
import Head from 'next/head'
import Banner from '../components/Banner'
import Contact_sec from '../components/Contact_sec'
import Content from '../components/Content'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MenuNav from '../components/BasicMenu'
import { bannerImgs } from '../data/bannerImages'
import { motion } from 'framer-motion'
import Statements from '../components/Statements'
import Selling_points from '../components/Selling_points'
import Video from '../components/Video'
import NewHead from '../components/NewHead'
import Banner02 from '../components/Banner02'
import commoditiesData from '../public/commodities.json';
import { getStorage, ref, listAll } from "firebase/storage";
// import 'materialize-css/dist/css/materialize.min.css'

// export const config = {
//   unstable_runtimeJS: false
// }


interface Props{
  bannerImages: Array<any>
}

const Home = () => {
  return (
    <motion.div className="h-screen bg-gradient-to-b lg:h-[140vh] " 
    >
      <Head>
        <title>Home &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      
      {/* <Header /> */}
      <NewHead />
      {/* <main className='relative pl-4 lg:space-y-24 lg:pl-16'> */}
      <Banner02/>
      <main className='max-w-screen-2xl mx-auto overflow-x-hidden'>
           {/* <Banner bannerImages={ bannerImgs }/> */}
            <Statements />
             {/* Content section */}
             <Selling_points />
             {/* s */}
             <Content />
             {/* Features */}
             <Features />
             {/* Video Section */}
             <Video />
             {/* Contact section */}
             <Contact_sec />
             {/* Footer */}
             <div className='w-screen h-[10vh]'></div>
      </main>
      <Footer />
    </motion.div>
  )
}

export async function getStaticProps() {
  const commodities = commoditiesData.commodities;
  return {
    props: { commodities }
  };
}

function CommodityPage({ commodities }: any) {
  // Render the commodities here
}


export default Home
