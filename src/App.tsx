import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DemoApp from './antd_demos/01.tsx'
import LayoutApp from './antd_demos/layout.tsx'
import StepsApp from "./antd_demos/steps";

import { DatePicker } from 'antd'


function func(date: dayjs, dateString: string) {
    alert(date);
    alert(dateString);
}

function App() {
  const [count, setCount] = useState(0)
    const { RangePicker } = DatePicker;
  return (
    <>
      {/*<div>*/}
      {/*  <a href="https://vitejs.dev" target="_blank">*/}
      {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
      {/*  </a>*/}
      {/*  <a href="https://react.dev" target="_blank">*/}
      {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      {/*<h1>Vite + React</h1>*/}
      {/*<div className="card">*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to test HMR*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<p className="read-the-docs">*/}
      {/*  Click on the Vite and React logos to learn more*/}
      {/*</p>*/}

        {/*<DatePicker /><br/>*/}
        {/*<hr/>*/}
        {/*<RangePicker*/}
        {/*    autoFocus={true}*/}
        {/*    size="large"*/}
        {/*    onChange={func}*/}
        {/*    format="YYYY-MM-DD HH:mm:ss"*/}
        {/*/>*/}

        <LayoutApp />


    </>
  )
}

export default App
