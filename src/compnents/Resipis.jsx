import { useEffect } from 'react';
import { useState } from 'react';


const Resipis = ({handleAdd}) => {
    const [resipi, setResipi] = useState([])

    
    useEffect(()=>{
      fetch('./resipis.json')
      .then(res => res.json())
      .then(data => setResipi(data))
    } ,[])



    return (
        <div className="md:w-2/3">
            <h2  className="card-title text-3xl mb-5 text-purple-700">Resipis</h2>
            <div  className='grid grid-cols-1 md:grid-cols-2 gap-6'>

            {resipi.map(resip=> <p  key={resip.recipe_id}>
                <div className='w-full mx-auto border rounded-lg'>
                    <figure className=':px-7 py-3'>
                        <img className='w-full h-72 rounded-lg'
                        src={resip.recipe_img}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        
                        <p className='text-2xl font-semibold'>{resip.recipe_name}</p>
                        <p className='text-lg text-gray-400'>{resip.short_description}</p>
                        <ul className='ml-8'>
                            {resip.ingredients.map((item, index) => <li className='list-disc text-gray-600' key={index}>{item}</li>)}
                        </ul>
                        <div className='flex justify-between'>
                            <div className='flex items-center '>
                                <i className="fa-regular fa-clock mr-3"></i>
                                <p>{resip.preparing_time}</p>
                            </div>
                            <div className='flex items-center'>
                            <i className="fa-solid fa-fire-flame-curved mr-3"></i>
                                 <p>{resip.calories}</p>
                            </div>
                        </div>
                        <div className="card-actions ">
                        <button onClick={()=>handleAdd(resip)} className="btn bg-lime-400">Want to Cook</button>
                        </div>
                    </div>
                </div>
            </p>
            )}
            </div>
            
  
           
        </div>
    )
};

export default Resipis;