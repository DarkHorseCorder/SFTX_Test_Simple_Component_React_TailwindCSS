import Avatar1 from '../assets/avatar/avatar1.png'
import Avatar2 from '../assets/avatar/avatar2.png'
import Avatar3 from '../assets/avatar/avatar3.png'
import Avatar4 from '../assets/avatar/avatar4.png'
import Avatar5 from '../assets/avatar/avatar5.png'
import { BsThreeDotsVertical } from 'react-icons/bs' 

function Investors() {
  return (
    <div className='bg-main-background-grey p-4 rounded-lg items-center justify-center shadow-lg text-lg'>
        <div className='flex items-center'>
            <p className='text-xl mr-2'>Investors:</p>
            <div className="flex -space-x-4">
                <img className="w-10 h-10 rounded-full" src={Avatar1} alt='Avatar1'/>
                <img className="w-10 h-10 rounded-full" src={Avatar2} alt='Avatar1'/>
                <img className="w-10 h-10 rounded-full" src={Avatar3} alt='Avatar1'/>
                <img className="w-10 h-10 rounded-full" src={Avatar4} alt='Avatar1'/>
                <img className="w-10 h-10 rounded-full" src={Avatar5} alt='Avatar1'/>
                <p className="flex items-center justify-center w-10 h-10 text-lg font-medium text-white bg-gray-700 border-2 border-custom-grey rounded-lg hover:bg-gray-600 dark:border-gray-800">+12</p>
            </div>
            <button className='ml-auto'>
                <BsThreeDotsVertical size={24}/>
            </button>
        </div>
        <div className='flex justify-between py-3'>
            <p className='text-custom-grey'><spin className='text-custom-green'>$4,000</spin> (your $1,000)</p>
            <p>$5,000</p>
        </div>
        <div class="w-full bg-custom-grey rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-custom-green h-2.5 rounded-full" style={{width: '75%'}}></div>
        </div>
    </div>
  );
}

export default Investors;
