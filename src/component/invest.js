function Invest() {
    return (
      <div className='bg-main-background-grey p-4 rounded-lg items-center justify-center shadow-lg text-lg'>
          <div className="bg-second-grey rounded mb-3 p-3">
              <div className="flex justify-between">
                  <p>Invest</p>
                  <p>Balance: 16,340.00</p>
              </div>
              <div className="flex justify-between">
                  <p className="text-2xl">0</p>
                  <p className="text-xl"><spin className='text-custom-green'>max</spin><spin className='text-custom-grey mx-2 text-3xl font-thin'>|</spin>USDC</p>
              </div>
          </div>
          <button className="flex items-center justify-center w-full border-2 border-custom-grey rounded-lg text-custom-grey bg-second-grey p-2 text-xl font-extrabold">
              Invest
          </button>
      </div>
    );
  }
  
  export default Invest;
  