import React, { FC, useState, useEffect } from 'react'
import './App.scss'

const options = [
  { value: 'pikachu', label: 'ピカチュウ' },
  { value: 'bulbasaur', label: 'フシギダネ' },
  { value: 'charmander', label: 'ヒトカゲ' },
  { value: 'squirtle', label: 'ゼニガメ' },
]

const App: FC = () => {
  const [myName, setMyName] = useState<string>("");
  const [storeName, setStoreName] = useState<string>();
  /*
  useEffect(() => {

    liff.init({ liffId: process.env.REACT_APP_LIFF_ID! }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login();
      }
    })
  }, [])
  */

  return (
    <div className="App">
      <p>送信したいメッセージを入れてね</p>
      <input type="text" className="名前" placeholder="名前を入力" value={myName} onChange={(e) => setMyName(e.target.value)} />
      <p>店名</p>
      <select placeholder="店名" onChange={(v) => setStoreName(v.target.value)} >
        {options.map(option => <option value={option.value} label={option.label} />)}
      </select>
      <p>生年月日</p>
      <div className="form-row">
        <div className="form-group col-4">
          <label>年</label>
          <input type="text" className="form-control" id="year" />
        </div>
        <div className="form-group col-4">
          <label>月</label>
          <input type="text" className="form-control" id="month" />
        </div>
        <div className="form-group col-4">
          <label>日</label>
          <input type="text" className="form-control" id="day" />
        </div>
      </div>
      <button id="send" className="btn btn-primary" >送信</button>
    </div>
  );
}

export default App;
//onClick={() => this.decrement()}
