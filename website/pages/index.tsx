import type { NextPage } from 'next'
import { useEffect } from 'react'
import { decrement, increment, getDataTestAsync, setDataTest } from "core-salons"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import localForage from "localforage"

const Home: NextPage = () => {

  const count = useSelector((state: any) => state.counter.value)
  const testData = useSelector((state: any) => state.counter.apiDataTest)
  const dispatch = useDispatch()

  const getIniData = async () => {
    dispatch(setDataTest(await getDataTestAsync()))
  }

  useEffect(() => {
    getIniData()
  }, [])

  return (
    <div className={" w-full flex flex-col justify-center items-center "}>
      <h1 className=' my-6 text-[35px] '> Hello Core Logic (as Lib)</h1>
      <div className=' w-full flex justify-center items-center my-12 flex-wrap'>
        <p className=' w-full text-center mb-3'> counter with RTK(redux tool kit)</p>
        <span onClick={() => { dispatch(increment()) }} className=' mx-4 cursor-pointer text-center text-[18px]'>
          +
        </span>
        <p className=' mx-6'>{count}</p>
        <span onClick={() => { dispatch(decrement()) }} className=' mx-4 cursor-pointer text-center text-[18px]'>
          -
        </span>
      </div>
      <h1 onClick={async () => {
        console.log(testData);
      }}>
        Log Data from Api Test
      </h1>
      <h1 className=' mt-4' onClick={async () => {
        const localF = await localForage.getItem("testData")
        console.log(localF);
      }}>
        Test localforage
      </h1>
    </div>
  )
}

export default Home
