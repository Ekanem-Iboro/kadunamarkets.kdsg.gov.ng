import React from 'react'
import Head from 'next/head'
// import News from '../components/News'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NewHead from '../components/NewHead'
import { motion } from 'framer-motion'


function news() {
  return (
    <>
      <Head>
        <title>News &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/logo.png" />

      </Head>

      <NewHead />
      <div className='w-screen h-[5vh] lg:h-[8vh]'></div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
        <div className="my-20 w-full ">
          <h1 className='text-4xl'>News</h1>
          <div className="w-[100px] p-[3px] bg-black"></div>
        </div>

        <motion.div 
        initial= {{
          y: 80,
          opacity: 0
          }}
          transition= {{duration: 1}}
          whileInView= {{ opacity: 1, y: 0}}
          viewport= {{ once: true}}
        className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">Flag-off for disbursement</span>
                <span className="mt-1 text-gray-500 text-sm">27th January 2023</span>
              </div>
              <div className="md:flex-grow h-40 overflow-y-scroll !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-gray-600">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Managing Director/CEO: Tamar Nandul’s Speech on Flag-off for the disbursement of the Uba Sani Grant to traders across Kaduna State</h2>
                <p className="leading-relaxed ">The Senator representing the Kaduna Central Senatorial Zone and our Special Guest of Honour, Distinguished Senator Uba Sani, the Administrator, Kaduna Capital Territory, Mallam Hafiz Bayero, the Comissioner, Business, Innovation and Technology who is represented by the Permanent Secretary, Senior Government officials, The Director General of the Uba Sani Campaign Organisation, The Chief Executive Officers of Woodmould Ventures Ltd and Hafs & Partners Ltd, The Chairman of the Kaduna State Traders Association, our esteemed traders, members of the press, ladies and gentle men; good morning.
I am pleased to welcome you all to the Flag-off for the disbursement of the Uba Sani Grant to traders across Kaduna State, additionally, Senator Uba Sani will be commissioning two shopping Centres today that are part of His Excellency, Governor Nasir Ahmed el-Rufai’s ambitious and impactful market redevelopment policy.
Our Special Guest of Honour, Distinguished Senator Uba Sani is known to all of us here, he has excelled in several spheres of life, he has worked across all levels of governance. I said governance not government because he has been an outsider working as a freedom fighter and advocating for hard won transition to democracy after several decades of military rule, he has been a special adviser to the President of the Federal Republic, Political Adviser to Governor el-Rufai, Special Adviser on Inter-Governental Relations to Governor el-Rufai and now as Senator of the Federal Republic, he is the Chairman of the House Committee on Banking, Insurance and Financial Institutions. As a first term senator, he has also distinguished himself in his representation of his constituency and indeed, all of Kaduna State. In spite of all his career achievements, he is most regarded for his philanthropy.
In September 2022, traders across Kaduna State endorsed his candidacy for Governor of Kaduna in the upcoming elections and inaugurated a support group towards the campaign effort. During my remarks at the event, we had called on the Senator to extend his goodwill to traders in Kaduna State and provide support to traders who are finding it difficult to purchase their shops and at that same event, Senator Uba Sani pledged the sum of N20,000,000 as support to traders across the State. We are pleased to confirm that true to his word, he has fulfilled that pledge to our traders. Because of his generosity, over 700 traders have been empowered. In Sheikh Gumi Market, 197 traders are getting support to make their mortgage down payments, in Kasuwan Magani, 80 traders have been supported to pay their rent for a year, 25 petty traders in Checheniya Market have been empowered, 10 women in Kabala market, 185 traders across Tudun Wada, Sabon Gari, Dan Magaji have been empowered. Of course traders in Ungwan Rimi, Kawo, Kasuwan Bacci and Kwoi are not left behind. The impact of this grant is immediate and transformational. We are sincerely grateful for this and we pray to God to reward you, to bless you abundantly, protect you and prepare you to do even more.
We have heard some people claiming that this is because of politics and I have asked them to also come and do their own politics, we want to strongly encourage this kind of politics that empowers people to become owners of their business promises, this kind of politics that provides support for traders to increase their capital or pay off their debts. I want to also advice the traders not to allow anyone politicise their development, this administration of Mal. Nasir

 Ahmad el-Rufai of which Senator Uba Sani is a core team member is focused on the development of people regardless of their political party. These naysayers are out to deceive you and cheat you. They are the same people who boasted to you that the market redevelopment program of Governor el-Rufai was a scam but we are here today and you can all attest to the transformation going in markets across Kaduna State.
We are aware some of them have peddled the fake news that we demolished 40,000 shops and we are using this opportunity to challenge them to show their proof. What we know as the truth is that today we are building over 20 markets across the State, some have even been completed, some have been commissioned, some are already in use. It is only in 9 markets that there was demolition, in 8 of these markets apart from Kasuwan Bacci, we provided temporary markets for traders to continue their business while construction is ongoing. Across these 9 markets, 7,915 traders were affected by our activities but most of them did not even have shops, the number of shops demolished is just about 5,000 and in their place we are building 14,677 shops and have already allocated 7,915 in these 9 markets. Furthermore, we have also started handing over shops to traders in Ungwan Rimi and Barnawa and we will start in Kawo next week and by God’s grace, the third phase of Sabon Gari and Kasuwan Bacci will also be handed over soon. His Excellency, Governor Nasir Ahmad el- Rufai will also commission the Ungwan Rimi Market next month.
Today, Senator Uba Sani will also commission this Shopping centre which was built on the former club 69 Garage and the GSM Market at the former 740 Garage, on Lagos Street. This shopping centre was built by Wood Mould Ventures Limited, an indigenous real estate developer whose portfolio of development projects spans across the country. In addition to their developmental prowess, they are also our development partners.
Governor Nasir Ahmad el-Rufai has instituted reforms to promote investment within the state, create jobs and foster a sustainable economy through private sector participation and commercialisation. This shopping centre and the GSM Market along Lagos Street are one of many outcomes of public-private partnerships we have entered into with private developers, Wood mould Nigeria Limited, and Hafs and Partners Limited.
With over N1bn in investment value, This Shopping centre boasts 109 shops of varying sizes, with ensuite shops and 24-hour surveillance to ensure the safety of our traders and their property.
We are also commissioning the newly completed GSM Market along Lagos street, which was built by Hafs and Partners, another of our high-performing development partners. The GSM market has an investment value of N700M naira and contains 244 Nr Shops which are multi-tiered and designed with the end user in mind.
As the foremost facilitator in commercial real estate development and management in Kaduna, the completion of these developments is one of many demonstrations of partnerships and facilitation of investments through private- sector participation and are all built-in line with KDSG’s urban renewal agenda.

 Both of the developments are intended to serve the local community and its surrounding environs.
I welcome all of you to this celebration of business, commerce and development, in honour of Senator Uba Sani.</p>
              </div>
            </motion.div>
        <motion.div 
        initial= {{
          y: 80,
          opacity: 0
          }}
          transition= {{duration: 1}}
          whileInView= {{ opacity: 1, y: 0}}
          viewport= {{ once: true}}
        className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">Funding for Traders</span>
                <span className="mt-1 text-gray-500 text-sm">26th December 2022</span>
              </div>
              <div className="md:flex-grow h-40 overflow-y-scroll !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-gray-600">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Managing Director/CEO: Tamar Nandul’s Speech Upon Declaration by Senator Uba Sani to Provide Funding for Traders in Kaduna State</h2>
                <p className="leading-relaxed ">Distinguished Senator and incoming Gov of Kaduna State, Senator Uba Sani, the administrator, KCTA, Mallam Muhammed Hafiz Bayero, local Government chairmen of kaduna north and south, State Parliamentarians, exco of the All Progressives Congress, chairman of the Kaduna State Traders Unions, representative of the Iyaloja general, Chairmen of Market Unions and Associations across the State, traders across our markets, members of the press, ladies and gentlemen. 

I want to first use the opportunity to thank each and everyone of you for being here today, we are grateful. We are also grateful for your support for His Excellency, Gov Nasir Ahmad Elrufai’s reforms and  activities in your markets, we will continue to work towards bringing solutions to the issues in our markets and most especially, our financial empowerment efforts through the sale of shops program. 

We are grateful to our chairman Alh. Abdulrahman for the initiative to consolidate the activities of unions across our markets under the kaduna State Traders Union. And taking it further by establishing this support group to ensure continuity is secured at the state and federal levels through their support for  Distunguised Senator Uba Sani and Her Excellency, Dr. Hadiza Sabuwa Balarabe and our federal flag bearers, Asiwaju Bola Ahmed Tinubu and His Excellency, Sen. Kashim Shettima. 

Just last week, His Excellency, Gov Nasir Ahmad Elrufai presented deeds of sublease to traders in sheikh Gumi and Kawo markets. This government has supported you to own your shops, to secure mortgage finance that allows you pay only 10% for your shops and pay back over seven years. 

We have briefed Our incoming governor, Sen Uba Sani about all our activities and he is committed to continuity and improving on what we have started. Distinguised Sen Uba Sani is also helping us follow up on applications for our traders who attended kaduna Business school and applied for the Agric, small and medium enterprise projects gram (agsmeis) under Nirsal. 

I also want to deliver the message of the traders so allow me to use this opportunity to address you , distinguished senator, our traders have gone through a lot due to the Covid pandemic and rising inflation. Some of the traders can’t afford their down payments. His Excellency, Gov Elrufai has supported us by giving us access to the kaduna state women’s entrepreneurship fund, Kadswef. we got 40m from the fund. We have disbursed 8m for female traders and have secured ownership of shops worth 80m. But men are complaining, they said i’m partial to women which is true but all the same, we would be grateful for your support to lunch a fund that we can disburse to traders based on need to be able to own their shops. 

Finally, I want to assure the traders that we have noted their support and we will not let them down. We will continue to ensure fairness and transparency. We also look forward to partnering with you towards a successful and peaceful campaign and election, by God’s grace. </p>
              </div>
            </motion.div>
        <motion.div 
        initial= {{
          y: 80,
          opacity: 0
          }}
          transition= {{duration: 1}}
          whileInView= {{ opacity: 1, y: 0}}
          viewport= {{ once: true}}
        className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">Presentation of Mortgage</span>
                <span className="mt-1 text-gray-500 text-sm">17th September 2022</span>
              </div>
              <div className="md:flex-grow h-40 overflow-y-scroll !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-gray-600">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Managing Director/CEO Tamar Nandul’s Speech at the Presentation of Mortgage Beneficiaries to His Excellency, Governor Nasir Elrufai</h2>
                <p className="leading-relaxed ">Good morning Your Excellency, The Governor, The Administrator,Kaduna Capital Territory Authority, Honourable Commissioners, Special Advisers, Members of the Sale of Shops Project Steering Committee, our development partners, members of various market unions, the media, ladies and gentlemen.
We are pleased to be gathered today to signify the fulfilment of one of His Excellency, Governor Nasir Elrufai’s remarkable commitments to traders across Kaduna State.
In 2019, traders in Sheik Abubakar Gumi Market were subject to a predatory gang of landlords, agents and other middlemen. Persons who were allocated shops on a temporary basis assumed illegal ownership of the shops and would sell them of as if the shops were their private property. While they were required to pay as little as N30,000 to the company, they would collect rents of up to N500,000 from the traders and in most cases would refuse to pay the company its due. Returns on the State Government’s investment in the market was just about 2% per annum. The company was earning revenues of only about N100m in 2016 when the value of the market is about N11bn. The market itself was in a poor state, it was congested and disorganised.
It was for these reasons that Governor Nasir El-rufai decided to disrupt the dynamics of the market and set a vision for the market to become mutually beneficial for the traders, general public and the State Government. He directed the empowerment of the traders through the transfer of ownership of all 6546 shops in the market to traders on an owner occupier basis so that traders can own their business premises and free up more capital to boost their businesses. My predecessor, Muhammad Hafiz Bayero who is with us today took this vision and ran with it. It wasn’t easy at all, there were challenges every step of the way beginning with convincing our own Kaduna Markets team that it was not only the right thing to do but that it was also possible. We are here today because he succeeded in selling the vision and earning the support of the traders, Goverment MDA’s and the general public.
At the same time, Governor Nasir El-Rufai recognised it was not sufficient to proclaim a policy but that measures and support structures had to be put in place to ensure the traders would actually benefit. So, we embarked on a long and comprehensive process to verify traders in the market and grant them the right of first refusal. Furthermore, to improve affordability of the shops, His Excellency secured a mortgage agreement with Sterling Bank for a single digit mortgage of 9% as well as a loan repayment period of 7 years. He also adopted the forced sale value of the market so that instead of a revenue target of N11bn, we expect only N7bn from the transaction. A new mortgage agreement has also been secured with Jaiz Bank to give the traders more options.
Alongside our transaction advisers, PricewaterhouseCoopers and our legal advisers Dikko and Mahmood Solicitors we have taken significant strides towards achieving a fair and transparent sales process. We have conducted several verification exercises where we confirmed 7035 authentic traders in the market and have resolved over 300 petitions through the Dispute Resolution Committee.
 
 Through the sale of shops program, we have achieved financial inclusion, digitization of records across all our markets, formalization of businesses, women empowerment and wealth creation.
We have been able to generate 3.7bn in revenue, our mortagage is the preferred payment option and the bank has processed mortgage applications totalling N2.9bn for 2439 traders at this time. The Kaduna Internal Revenue Service has earned 88.5m tax collections, 2000 new business premises registrations have been issued by the Ministry of Business, Innovation and Technology and 5900 new residency cards have been registered.
Additionally, through another initiative of His Excellency, the Kaduna State Womens Entrepreneurship Fund (KADSWEF), we obtained N40m from the Ministry of Human Services and Social Affairs and have empowered women across several markets by providing soft loans to enable them pay their mortgage security deposits. We have disbursed over 8m from the fund so far and have supported women traders to own their business premises worth over N80m. The multiplier effect of this exercise has been comprehensive and impactful across several sectors and performance indices. You’ll recall that I mentioned earlier that the company earned only about N120m in 2016, this figure has been growing. By 2018, revenues increased to N350 and by 2021, the company earned over N1.5bn.
We also have here with us today, various stakeholders from various markets including Kasuwan Bacci, Kabala, Sabon Gari, Ungwan Rimi, Kwoi and others. I want to specially recognise Alh, Ibrahim Daudawa the immediate past chairman of the Central Market. Traders have taken to calling me Maman Daudawa but we weren’t always friendly, we had to earn his trust and support. He was bold in his representation of the traders and we are thankful to him and several others for keeping us accountable.
We sincerely extend our appreciation to everyone who has supported the implementation of this transaction, the Project Steering Committee for the Sale of Shops program, the traders, staff of KMDMC, Ministry of Business, Innovation and Technology, Ministry of Finance for realising N1bn for the mortgage with additional planned expenditure of N3.5bn, the Kaduna Internal Revenue Service, Kaduna State Residents Registration Agency, Kaduna Geographic Information Service and most importantly, His Excellency, Mallam Nasir Elrufai.
Today we have here with us, 25 beneficiaries, 17 beneficiaries of the Sterling Bank mortgage for the Sheikh Abubakar Gumi Market as well as 8 beneficiaries of the Jaiz Bank mortgage and KADSWEF from Kawo Market, whose shops have been fully financed as promised by His Excellency, The Governor. I want to congratulate them, they are the latest property owners in Kaduna State.
This process is being replicated across our markets and we will continue to ensure transparency and fairness in the sale of shops across markets in Kaduna State. </p>
              </div>
            </motion.div>
        <motion.div 
         initial= {{
          y: 80,
          opacity: 0
          }}
          transition= {{duration: 1}}
          whileInView= {{ opacity: 1, y: 0}}
          viewport= {{ once: true}}
        className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">INSPECTION</span>
                <span className="mt-1 text-gray-500 text-sm">22nd July 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">KMDMC officials inspects Kasuwan Barci</h2>
                <p className="leading-relaxed">The AGM Projects and Procurement, Yemi Bakare. Company Secretary/Legal Adviser, Barr Muhammad Sani Suleiman & Manager Stakeholder Relations, Abdulaziz  Umar inspected the ongoing re-construction of Kasuwan Barci Marker. It is one of our numerous market development projects in line with the states urban renewal agenda.</p>
                {/* <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </motion.div>
        <motion.div 
         initial= {{
          y: 80,
          opacity: 0
          }}
          transition= {{duration: 1}}
          whileInView= {{ opacity: 1, y: 0}}
          viewport= {{ once: true}}
        className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">CONTRACT</span>
                <span className="mt-1 text-gray-500 text-sm">15th July 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">KMDMC official handover of site</h2>
                <p className="leading-relaxed">The Kaduna Markets Development & Management Company has officially handed over to contractors the site to build a Trailer Park, Grains Market,and Bus Terminal at <b>Jere, Kagarko Local Government Area Kaduna State</b>. The Project aims to boost the local agricultural market, provide a mordern system for bus transit services as well as an organized heavy duty truck parking system. </p>
                {/* <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </motion.div>

        <motion.div 
         initial= {{
          y: 80,
          opacity: 0
          }}
          transition= {{duration: 1}}
          whileInView= {{ opacity: 1, y: 0}}
          viewport= {{ once: true}}
        className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">EVENT</span>
                <span className="mt-1 text-gray-500 text-sm">1st & 2nd July 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">July Tradefair</h2>
                <p className="leading-relaxed">KMDMC hosted the second edition of the #KMDMC Tradefair at Murtala Muhammed Square. The tradefair is in line with our commitment to provide safe and conducive commercial platforms for traders and business owners in Kaduna State. Side activities include a free enterprenurship and business workshop, Mini Football Tournament hosted by Kaduna United Football Club (KUFC), board games by Fasaha cafe, a picnic section, photobooth and kids playing area</p>
                {/* <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </motion.div>

            <motion.div 
             initial= {{
              y: 80,
              opacity: 0
              }}
              transition= {{duration: 1}}
              whileInView= {{ opacity: 1, y: 0}}
              viewport= {{ once: true}}
            className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">SALES</span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">KMDMC SALE OF SHOPS: Shiek Abubakar Gumi Market Phase 2</h2>
                <p className="leading-relaxed">The Kaduna Markets Development & Management Company is delighted to notify the general public that Shops 54 & 56 Neighbourhood Centres are now available for sale.</p>
                {/* <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </motion.div>

          <motion.div 
           initial= {{
            y: 80,
            opacity: 0
            }}
            transition= {{duration: 1}}
            whileInView= {{ opacity: 1, y: 0}}
            viewport= {{ once: true}}
          className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">EXECUTIVE ADDRESS</span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Gov. El-Rufai &bull; Official speech</h2>
                <p className="leading-relaxed">We Will Boost Economic Activities by Providing Modern Markets & Shopping Centres</p>
                {/* <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>
                       
          </motion.div>
        </div>
      </section>
      <div className='w-screen h-[20vh]'></div>
      <Footer />
    </>
  )
}

export default news