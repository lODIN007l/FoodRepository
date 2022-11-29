import '../styles/globals.css'
import {QuiskoProvider} from "../context/QuiskoProvider"


function MyApp({ Component, pageProps }) {
  
  return (
  <QuiskoProvider> 
    <Component {...pageProps} /> 
    </QuiskoProvider>)
  




}

export default MyApp
