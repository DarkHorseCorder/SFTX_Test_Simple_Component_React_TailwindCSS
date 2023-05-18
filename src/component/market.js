function Market() {
  return (
    <div className='bg-main-background-grey p-4 rounded-lg items-center justify-center shadow-lg text-lg'>
        <div className="flex justify-start">
            <p className="text-custom-grey text-xl">Market</p>
            <p className="text-xl ml-2">Limit</p>
        </div>
        <div className="bg-second-grey rounded my-3 p-3">
            <div className="flex justify-start text-custom-grey">
                <p>Pay: 4,000USD</p>
            </div>
            <div className="flex justify-between text-xl">
                <p className="text-custom-grey text-3xl font-extrabold">40,000</p>
                <p>USDC</p>
            </div>
        </div>
        <div className="bg-second-grey rounded my-3 p-3">
            <div className="flex justify-between text-custom-grey">
                <p>Price</p>
                <p>Mark 1,245.64</p>
            </div>
            <div className="flex justify-between text-xl font-extrabold">
                <p className="text-3xl">1,299</p>
                <p>USD</p>
            </div>
        </div>
        <div className="flex justify-between my-2">
            <p className="text-custom-grey">Leverage</p>
            <p>10.00x</p>
        </div>
        <div className="flex justify-between my-2">
            <p className="text-custom-grey">Liq. Price</p>
            <p>$1,048.24</p>
        </div>
        <div className="flex justify-between my-2">
            <p className="text-custom-grey">Current Price</p>
            <p>$1,245.64</p>
        </div>
        <button className="flex items-center justify-center w-full border-2 border-custom-green rounded-lg text-custom-green bg-custom-green-transparent p-2 font-extrabold">
            Create Limit Order
        </button>
    </div>
  );
}

export default Market;
