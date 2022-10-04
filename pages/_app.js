import '../styles/globals.css'
import { wrapper, store } from "../redux/store";
import Topbar from '../components/topbar'
import Footer from '../components/footer'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const exceptPath = [
    '/user/login',
    '/user/forgot-password',
    '/user/change-password-verify',
    '/user/register',
    '/user/verify-email'
  ]
  const found = exceptPath.find(item =>
    item == router.pathname
  )

  return <>
    {!found && <div className='h-full'>
      {/*  <Topbar></Topbar> */}
      <Component {...pageProps} />
      {/*   <Footer></Footer> */}

    </div>}
    {found && <div className='h-screen'>
      <Component {...pageProps} />
    </div>}


  </>
}

/* export default wrapper.withRedux(MyApp); */
export default wrapper.withRedux(MyApp);