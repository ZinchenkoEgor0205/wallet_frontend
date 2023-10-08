import React from "react";
import "../styles/total_assets_styles.css"


class TotalAssets extends React.Component {

    render() {
        let ccyBlocks = []
        this.props.data.forEach(function (item) {
            let listEl =
                <div className='data__total-assets__items'>
                    <p className='data__total-assets__item data__total-assets__item-ccy'>{item.ccy}</p>
                    <div className="data__total-assets__item data__total-assets__item-info">
                        <p className='data__total-assets__item-info-el'>amount: {item.amount}</p>
                        <p className='data__total-assets__item-info-el'>available: {item.amountAvailable}</p>
                        <p className='data__total-assets__item-info-el'>frozen: {item.amountFrozen}</p>
                    </div>
                </div>
            ccyBlocks.push(listEl)
        })

        return (
            <div className='data__total-assets'>
                {ccyBlocks}
            </div>
        )
    }
}

export default TotalAssets