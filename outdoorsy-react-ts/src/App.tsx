import './index.css';
import React from 'react';

import Input from './components/input-component/Input.component';
import CampersList from './components/campers-list/Campers-list.component';

const App: React.FC = () => {

  return (
    <div className="">
      <Input />
      <CampersList />
    </div>
  )
}

export default App
