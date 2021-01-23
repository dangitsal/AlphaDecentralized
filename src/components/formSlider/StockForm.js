import React, {Component, useContext} from 'react'
import axios from 'axios'
import {ReportContext} from '../ReportContext'
import './QueryForm.css'

export default class StockForm extends Component{
    constructor(){
        super()
        this.state = {
            symbol: 'FB, AMZN, NFLX, GOOG'
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        const{symbol} = this.state

        axios.post('/', {symbol})
            .then((result) => {
                //Access results
            })

        fetch('https://dangitsal.pythonanywhere.com/api/fullsheet')
            .then(response => response.json())
            .then((jsonData) => {
            console.log(jsonData)
            const report = useContext(ReportContext)
            report.setData(jsonData)
            })
            .catch((error) => {
            console.error(error)
            })
    }

    render(){
        const{symbol} = this.state
        return(
            <div className='queryFormWrapper'>
                <form className='queryForm' onSubmit={this.onSubmit}>
                    <h1>Stocks (NYSE)</h1>
                    <label className='symbolLabel'>
                        Symbol(s):
                        <input type='text' name='symbol' value={symbol} onChange={this.onChange}/>
                    </label>
                    <div className='queryButtonWrapped'>
                        <button className='queryButton' type='submit'>
                            Analyze
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}