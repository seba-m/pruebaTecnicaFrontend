import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomHead } from '@/components/CustomHead'
import { NavBar } from '@/components/NavBar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomHead />
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
