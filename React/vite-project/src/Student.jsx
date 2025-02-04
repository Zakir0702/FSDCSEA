import React from 'react'
import './iCard.css'
// import defaultPic from './assets/Cat.jpeg';
function Student({data}){
  console.log(data);
  
  return (
    <div className='icard'>
    {/* {
      JSON.stringify(data)
    } */}
        <table>
            <tbody>
                <tr style={{backgroundColor:'lavender'}}><td colSpan={2}>{data.college}</td></tr>
                <tr><td colSpan={2}><img src={data.pic} width={100}/></td></tr>
                <tr><td>Name: </td><td>{data.name}</td></tr>
                <tr><td>Roll_Number: </td><td>{data.roll}</td></tr>
                <tr><td>Branch: </td><td>{data.branch}</td></tr>
                <tr><td>Section: </td><td>{data.section}</td></tr>
            </tbody>
        </table>
    </div>
  )
}


// Student.defaultProps = {
//   college: 'AKG ENGINEERING COLLEGE',
//   pic: <img src={defaultPic} alt="Default" width={50} />
// };

export default Student