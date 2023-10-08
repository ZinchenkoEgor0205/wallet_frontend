import React from "react";
import axios from "axios";
import TotalAssets from "./total_assets";
import "../styles/data_styles.css"


class DataView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {"user":"","deposits":{"common":{"0":{"deposit_sum":0,"deposit_income":0}},"crypto":{"OKX":{},"binance":{},"total_cost_USDT":0}}},
            okxDataList: [1]
        }
        this.getData = this.getData.bind(this)
    }
    async getData() {
        let okxDataList = []
        let data
        await axios.get('http://127.0.0.1:8000/main/', {withCredentials: true}).then(result => {
            data = result.data
        })
        await this.setState({data: data})
        for (let el in data.deposits.crypto.OKX) {
            let item = {
                ccy: el,
                amount: data.deposits.crypto.OKX[el].amount,
                amountAvailable: data.deposits.crypto.OKX[el].available,
                amountFrozen: data.deposits.crypto.OKX[el].frozen,

                costUSDT: data.deposits.crypto.OKX[el].cost_USDT,

            }
            okxDataList.push(item)
        }
        await this.setState({okxDataList: okxDataList})
    }

    render() {
        let haveData = this.state.data.user
        return (
            <div className='data'>
                {
                    haveData ?
                    <div className='data__list'>
                        <TotalAssets data={this.state.okxDataList}/>
                    </div>
                    : <div></div>
                }
                <button className="data__get-data-btn" onClick={this.getData}>get data</button>
            </div>
        )
    }
}

export default DataView