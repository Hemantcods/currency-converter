import { useState } from 'react'
import { InputBox } from './componets'
import useCurrencyInfo from './hooks/useCurrencyinfo'
function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currenctInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currenctInfo)
  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(0);
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(amount * currenctInfo[toCurrency]);
  }
  return (


    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  CurrencyOPtions={options}
                  onCurrencyChange={(currency)=> setFromCurrency(currency)}
                  selectCurrency={fromCurrency}
                  onAmountChange={(value) => setAmount(value)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  CurrencyOPtions={options}
                  onCurrencyChange={(currency)=>setToCurrency(currency)}
                  selectCurrency={toCurrency}
                  amountDisabled={true}
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
