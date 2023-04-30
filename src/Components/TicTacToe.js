import React from 'react'
import '../TicTac.css'
import TicTacBox from './TicTacBox'

export default function TicTacToe() {
  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col-auto ">
            <TicTacBox value="1" />
          </div>
          <div className="col-auto">
            <TicTacBox value="2" />
          </div>
          <div className="col-auto">
            <TicTacBox value="3" />
          </div>
        </div>
        <div className="row">
          <div className="col-auto ">
            <TicTacBox value="1" />
          </div>
          <div className="col-auto">
            <TicTacBox value="2" />
          </div>
          <div className="col-auto">
            <TicTacBox value="3" />
          </div>
        </div>
        <div className="row">
          <div className="col-auto ">
            <TicTacBox value="1" />
          </div>
          <div className="col-auto">
            <TicTacBox value="2" />
          </div>
          <div className="col-auto">
            <TicTacBox value="3" />
          </div>
        </div>
      </div>
    </div>
  )
}
