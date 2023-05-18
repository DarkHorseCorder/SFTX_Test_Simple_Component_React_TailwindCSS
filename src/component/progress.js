import { CgTimelapse } from 'react-icons/cg'
import { BsCheckCircle, BsRecordCircle} from 'react-icons/bs'
function Progress() {
  return (
    <div className='bg-main-background-grey p-4 rounded-lg flex items-center justify-center shadow-lg text-xl font-normal'>
        <div className='flex flex-col items-center mr-6'>
            <CgTimelapse size={24} className='text-custom-yellow'/>
            <p className='text-white'>Raising</p>
        </div>
        <div className="flex-grow rounded-lg h-1 bg-custom-yellow"></div>
        <div className='flex flex-col items-center mx-6'>
            <BsRecordCircle size={24} className='text-custom-grey'/>
            <p className='text-custom-grey'>Live</p>
        </div>
        <div className="flex-grow rounded-lg h-1 bg-custom-grey"></div>
        <div className='flex flex-col items-center ml-6'>
            <BsCheckCircle size={24} className='text-custom-grey'/>
            <p className='text-custom-grey'>Closed</p>
        </div>
    </div>
  );
}

export default Progress;
