import Layout from '../components/layout/Layout';
import '../style/global.css'
import { BiconomyProvider } from '../components/Hooks/Connection';
import { useEffect } from 'react'
import { useAlchemy } from '../components/Hooks/Connection';
function MyApp({ Component, pageProps }) {
  const {provider,smartAccount, smartAccountAddress,connect} = useAlchemy();


  return (
    <BiconomyProvider>
                      <Layout>
                        <Component {...pageProps} />
                      </Layout>      
                    </BiconomyProvider>
  )
}

export default MyApp
