
import BitcoinRates from '../pages/BitcoinRates'

// import the emojiContextProvider in order to use the context
import { EmojiContextProvider } from '../context/EmojiContextProvider'

import { AppRoutes } from '../routes/AppRoutes'

import NavBar from '../components/NavBar'

function App() {

  return (
    <>
      <EmojiContextProvider>
        {/* moved the emoji context provider tag to encompas the bitcoinRates  */}
        <NavBar></NavBar>
        {/* have the NavBar component at the top */}
        {/* <BitcoinRates /> */}
                {/*  Have commented out the non required components */}
      {/* wrap the emoji component with the context provider in the highest level component (App.jsx): */}
           {/* <Emoji></Emoji> */}
        <AppRoutes></AppRoutes>
      </EmojiContextProvider>


    </>
  )
}

export default App
