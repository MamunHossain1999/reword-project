

import Resipis from './compnents/Resipis';
import Sidebar from './compnents/Sidebar';

const App = () => {


  return (
    <div className='w-11/12 mx-auto lg:flex flex-cols  border'>
      <Resipis></Resipis>
      <Sidebar></Sidebar>
    </div>
  );
};

export default App;