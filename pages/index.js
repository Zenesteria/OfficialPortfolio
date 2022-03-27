import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import Main from '../components/Main'
import SubMain from '../components/SubMain'
import SkillSets from '../components/SkillSets'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='main'>
      <Head>
        <title>Abdurrahman Aderinto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo.ico" />
      </Head>
      <NavBar/>
      <Main/>
      <SubMain/>
      <SkillSets/>
      <Footer/>
    </div>
  )
}
