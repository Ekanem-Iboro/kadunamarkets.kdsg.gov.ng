import Head from 'next/head'
import NewHead from '../components/NewHead'
import Publications from '../components/Publications'


type Props = {}

function publications({}: Props) {
  return (
    // <div>publications</div>
    <>
      <Head>
        <title>Publications &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/logo.png" />
      </Head>

        <NewHead />
        <Publications />
    </>
  )
}

export default publications