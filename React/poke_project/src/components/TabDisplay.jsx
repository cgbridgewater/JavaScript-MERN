import { useState } from 'react';
import Tab from './tabholder/Tab'
import Tabs from './tabholder/Tabs';
import TabPanel from './tabholder/TabPanel';
import WhatIsPokemon from './tabDisplays/WhatIsPokemon';
import Pokedex from './tabDisplays/Pokedex';
import Footer from './tabDisplays/Footer';
import SleepingPichu from './tabDisplays/PikuSleeping';
import PokemonGo from './tabDisplays/PokemonGo';
import PokemonFavorites from './tabDisplays/PokemonFavorites';


  const TabDisplay = (props) => {
  const [activeTab, setActiveTab] = useState(1);
  const handleChange = (e, value) => {
    setActiveTab(value);
  }

  return (
    <div className="TabDisplay">
      {/* Tab Control */}
      <div className='TabsContainer' >
      <Tabs selectedTab={activeTab} onChange={handleChange} >
        <Tab label="What is Pokémon" value={1}/>
        <Tab label="Sleeping Pichu" value={2}/>
        <Tab label="Pokémon Go" value={3}/>
        <Tab label="Pokédex" value={4}/>
        <Tab label="Favorited Pokémon" value={5}/>
      </Tabs>
      </div>

      {/* Tab Window Control */}
      <div className='TabPanelContainer'>

        {/* Tab window 1 */}
        <TabPanel value={activeTab} selectedIndex={1}>
            <WhatIsPokemon/>
        </TabPanel>

        {/* Tab window 2 */}
        <TabPanel value={activeTab} selectedIndex={2}>
            <SleepingPichu/>
        </TabPanel>

        {/* Tab window 3 */}
        <TabPanel value={activeTab} selectedIndex={3}>
          <PokemonGo/>
        </TabPanel>

        {/* Tab window 4 */}
        <TabPanel value={activeTab} selectedIndex={4}>
          <Pokedex/>
        </TabPanel>

        {/* Tab window 5 */}
        <TabPanel value={activeTab} selectedIndex={5}>
        <PokemonFavorites/>
        </TabPanel>

        {/* Page footer */}
        <Footer/>
      </div>
    </div>
  );
}

export default TabDisplay;