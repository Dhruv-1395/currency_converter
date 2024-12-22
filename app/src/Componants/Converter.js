import React,{useState} from 'react'
import Dropdown from './Dropdown'

const Converter = () => {

    const [ammount,setAmmount] = useState(0);
    const [fromval,setFromVal] = useState(1);
    const [toval,setToVal] = useState(84.43);
    const [convert,setConvert] = useState(0)

    // console.log("from:"+fromval);
    // console.log("to:"+toval);
    const handleConvert = () =>{
        
        if(fromval !== 1){
            const changeInUsd = ammount / fromval;
            const convertTo = changeInUsd * toval;
            setConvert(convertTo.toFixed(2));
            console.log(convert);
            
        }
        else{
            const convertTo =ammount * toval;
            setConvert(convertTo.toFixed(2));
        }
       
    }

    
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
            <div className="w-full max-w-md p-6 space-y-6 bg-slate-50 rounded-lg">
                <h1 className="text-2xl font-semibold text-center">
                    Currency Converter
                </h1>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 ">
                            Enter Amount
                        </label>
                        <input
                            id="amount"
                            type="text"
                            className="w-full  p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-sky-600 shadow-sm"  
                            placeholder='00'
                            value={ammount}
                            onChange={(e)=>setAmmount(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-4">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                From
                            </label>
                          <Dropdown 
                          currency={fromval}
                          setcurrency={setFromVal}
                          />
                        </div>

                        <button className="mt-6">
                            {/* <ArrowLeftRight className="w-5 h-5 text-gray-500" /> */}
                        </button>

                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                To
                            </label>
                            <Dropdown 
                            currency={toval}
                            setcurrency={setToVal}
                            />
                        </div>
                    </div>

                   
                        <div className="text-center py-2 text-gray-600">
                            {convert}
                        </div>
                   

                    <button
                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md"
                        onClick={handleConvert}
                    >
                        Get Exchange Rate
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Converter