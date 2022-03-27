import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'

export default function About() {
    return(
        <div className='main'>
            <Head>
                <title>Abdurrahman Aderinto</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/images/logo.ico" />
            </Head>
            <NavBar/>
            <AboutContent/>
            <Footer/>
        </div>
    )
}