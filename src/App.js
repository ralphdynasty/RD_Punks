
import Header from './components/Header';

import './App.css';

import { useState, useEffect} from 'react'
import axios from 'axios'
import PunkList from './components/PunkList';
import Main from './components/Main';


function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect (() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x6aA2DA0EBf07462e14DDCF6748028040c791cefD&order_direction=asc')

      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])

  return (
    <div className='app'>

       <Header/>
       {punkListData.length > 0 && (
         <>
           <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
           <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
         </>
       )}
       
    </div>
    
  );
}

export default App;
