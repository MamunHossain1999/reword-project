

import { useState } from 'react';
import Resipis from './compnents/Resipis';
import Sidebar from './compnents/Sidebar';

const App = () => {
const [resipe, setResip] = useState([])
const [preparedRecipe, setPreparedRecipe]= useState([])

const handleAdd= resib => {
const isExit = resipe.find(
  previusResib => previusResib.recipe_id === resib.recipe_id
)

    if(!isExit){
      setResip([...resipe, resib])
    }else{
      alert('Resipes all ready exists in the queue.')
    }
    
}


const handleRemove = (id) => {
  // Find the recipe to remove based on the id
  const remove = resipe.find(resipe => resipe.recipe_id === id);

 
  const updatedRecipes = resipe.filter(resipe => resipe.recipe_id !== id);

  
  setResip(updatedRecipes);


 
  setPreparedRecipe([...preparedRecipe, remove]); 
 
};


  return (
    <div className='w-11/12 mx-auto lg:flex flex-cols  space-x-4'>
      <Resipis handleAdd={handleAdd} ></Resipis>
      <Sidebar resipe={resipe} handleRemove={handleRemove} preparedRecipe={preparedRecipe}></Sidebar>
    </div>
  );
};

export default App;