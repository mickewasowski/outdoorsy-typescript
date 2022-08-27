import './index.css';
import React from 'react';

import Input from './components/input-component/Input.component';
import CampersList from './components/campers-list/Campers-list.component';

const App: React.FC = () => {

  return (
    <div className="w-11/12 m-auto pt-[2rem]">
      <Input />
      <CampersList />
    </div>
  )
}

export default App
