import React, { useState } from 'react';
import './css/tabs.css';
import ListDifferences from './ListDifferences';
import PomodoroClock from './PomodoroClock';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div>
        <ul className="tabs">
            <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1) }>First Tab</li>
            <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2) }>Second Tab</li>
            
        </ul>

        <div className="tab_content">
            { activeTab === 1 && <div className="tab_panel"> <ListDifferences/> </div> }
            { activeTab === 2 && <div className="tab_panel"> <PomodoroClock/> </div> }
        </div>
    </div>
  );
};

export default Tab;