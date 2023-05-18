import { FiUpload } from 'react-icons/fi'
function ShareSTV() {
    return (
        <button className="flex items-center justify-center w-full rounded-lg text-custom-green bg-main-background-grey text-xl p-3 font-extrabold">
            <FiUpload size={24} className='text-custom-green mx-2'/>
            Share STV
        </button>
    );
}
  
export default ShareSTV;
  