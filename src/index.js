import React from 'react'
import PropTypes from 'prop-types'
import getIt from 'get-it'
import jsonResponse from 'get-it/lib/middleware/jsonResponse'
import promise from 'get-it/lib/middleware/promise'
import Button from 'part:@sanity/components/buttons/default'

import styles from './styles.css'

const request = getIt([promise(), jsonResponse()])

class SnipcartOrders extends React.Component {
  static propTypes = {
    apiKey: PropTypes.string,
    limit: PropTypes.number,
  }

  state = {
    orders: null,
    error: null,
  }
  getOrders = async () => {
    
    const request = await fetch(`https://app.snipcart.com/api/orders?limit=${this.props.limit}`, {
      headers: {
          'Authorization': `Basic ${btoa(this.props.apiKey)}`,
          'Accept': 'application/json',
      }
    })

    const orders = await request.json()
    this.setState({orders})
  }

  componentDidMount() {
    this.getOrders()
  }

  render() {
    const {error, orders} = this.state
  
    // console.log(orders)
    if (error) {
      return <pre>{JSON.stringify(error, null, 2)}</pre>
    } else if (orders == null) {
      return (
        <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Orders</h2>
        </header>
        <div className={styles.content} id="loading-cont">
          <h2>Loading...</h2>
        </div>
      </div>
      )
    } else {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Orders</h2>
        </header>
        <div className={styles.content}>
          {orders.items.map(order =>
            <div key={order.invoiceNumber} className={styles.order}>
                <div className={styles.avatar}>
                  <img src={order.user.gravatarUrl} width="60px" height="60px"></img>
                </div>
                <a title="view invoice" className={styles.link} href={`https://app.snipcart.com/dashboard/orders/${order.token}`}>
                  <h4 className={styles.name}>{order.user.billingAddress.fullName} spent ${order.finalGrandTotal} at {new Date(order.completionDate).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</h4>
                </a>
                <div className={styles.status}>
                  <p>status</p>
                  <p>{order.status == "Processed" ? "✅" : "❌"}</p>
                </div>
            </div>
          )} 
        </div>
        <div className={styles.footer}>
            <Button bleed color="primary" kind="simple" onClick={this.getOrders}>
              refresh
            </Button>
          </div>
      </div>
    ) }
  }
}

export default {
  name: 'snipcart-orders',
  component: SnipcartOrders
}
