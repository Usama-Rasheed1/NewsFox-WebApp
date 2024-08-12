import React, { Component } from 'react'
import loader from './loader.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-4' src={loader} alt='loader..' style={{ width: '50px', height: '50px' }}></img>
      </div>
    )
  }
}

export default Spinner