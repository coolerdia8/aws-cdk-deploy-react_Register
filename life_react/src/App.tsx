import React, { FC, useState, useEffect } from 'react'
import { Profile } from '@line/bot-sdk'
import './App.scss'
import Select from 'react-select'

interface OptionType {
  label: string
  value: string
}

const options = [
  { value: 'pikachu', label: 'ピカチュウ' },
  { value: 'bulbasaur', label: 'フシギダネ' },
  { value: 'charmander', label: 'ヒトカゲ' },
  { value: 'squirtle', label: 'ゼニガメ' },
]

const App: FC = () => {
  const [myName, setMyName] = useState<string>("");
  const [storeName, setStoreName] = useState<OptionType>();
  /*
  useEffect(() => {

    liff.init({ liffId: process.env.REACT_APP_LIFF_ID! }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login();
      }
      liff.getProfile()
        .then(profile => {
          setProfile(profile)
        })
        .catch((err) => {
          console.log('error', err)
        })
    })
  }, [])
  */

  return (
    <div className="App">
      <form id="send-message">
        <p>送信したいメッセージを入れてね</p>
        <input type="text" className="名前" placeholder="名前を入力" value={myName} onChange={(e) => setMyName(e.target.value) } />
        {//<label>店名</label>
        }
        <p>店名</p>
        <Select options={options} placeholder="店名" onChange={(v: any)=> setStoreName(v)} />
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

      </form>
    </div>
  );
}

export default App;
//onClick={() => this.decrement()}
