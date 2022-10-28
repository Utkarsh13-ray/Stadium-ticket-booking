import React from 'react'

export default function Booked(props) {
    const handleremove=()=>{
     localStorage.removeItem('pay');
     window.location.reload();
    }
  return (

    <div>
        {/* <div className='text-center text-3xl my-2'>Hii {props.name}</div> */}
        <div className='text-center text-3xl mb-10 my-3'>Hii {props.name}<span className='font-bold'> Your Bookings</span> </div>
        {!localStorage.getItem('pay')?
        <div className='text-xl text-center'>No tickets has been booked</div>:
        <div className='flex justify-center '><table class="table-auto">
        <thead className='bg-gray-400 '>
          <tr className='flex space-x-96 text-xl'>
            <th className='p-4'>Match</th>
            <th className='border-l-4 p-2 py-4'>Status</th>
            <th className='border-l-4 p-4'>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr  className='flex space-x-72 text-xl '>
            <td className='p-4'>IIITR vs MNIT Allahabad</td>
            <td className='l-4 p-4 '>Success</td>
            <td className='l-4 p-4 pr-8'>29 FEB,2023</td>
          <div className='bg-red-500 my-2 rounded p-2 cursor-pointer' onClick={handleremove}>cancel ticket</div>
          </tr>
        </tbody>
      </table></div>
        }
    </div>
  )
}
