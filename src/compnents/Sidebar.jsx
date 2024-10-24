

const Sidebar = ({resipe, handleRemove, preparedRecipe }) => {
   
    return (
        <div className="md:w-1/3 border rounded-lg  mt-14 ">
            <h1 className="card-title text-3xl mb-5 text-purple-700">Card: {resipe.length}</h1>
           
            <div className=" overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                   {resipe.map((resipe, index)=><tr className="hover" key={index}>
                    
                        <td>{index + 1}</td>
                        <td>{resipe.recipe_name}</td>
                        <td>{resipe.preparing_time}</td>
                        <td>{resipe.calories}</td>
                        <td><button onClick={()=>handleRemove(resipe.recipe_id)} className="btn bg-lime-400">Want to Cook</button></td>
                    
                   </tr>)}
                        
                    </tbody>
                </table>
            </div>
            {/* nicer add korar jonno table */}
            <div className="mt-10">
            <h1 className="card-title text-3xl mb-5 text-gray-600">Current {preparedRecipe.length}</h1>
           
           <div className=" overflow-x-auto">
               <table className="table">
                   {/* head */}
                   
                   <tbody>
                   {/* row 1 */}
                  {preparedRecipe.map((resipe, index)=><tr className="hover" key={index}>
                   
                       <td>{index + 1}</td>
                       <td>{resipe.recipe_name}</td>
                       <td>{resipe.preparing_time}</td>
                       <td>{resipe.calories}</td>
                      
                   
                  </tr>)}
                       
                   </tbody>
               </table>
           </div>
            </div>
        </div>
    );
};

export default Sidebar;