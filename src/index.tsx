import React, { useState, useEffect } from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import { Container } from '@sanity/ui'
// import {useSecrets, SettingsView} from 'sanity-secrets'

// const namespace = "snipcart-orders"

// const pluginConfigKeys = [{
//   key: 'apiKey',
//   title: 'Your secret API key'
// }]

const GlobalStyle = createGlobalStyle`
  @import 'part:@sanity/base/theme/variables-style';
`

// const Container = styled.div`
//   composes: container from "part:@sanity/dashboard/widget-styles";
// `

const Header = styled.header`
  composes: header from "part:@sanity/dashboard/widget-styles";
`

const Title = styled.h2`
  composes: title from "part:@sanity/dashboard/widget-styles";
`

const Content = styled.div`
  composes: content from 'part:@sanity/dashboard/widget-styles';
  border-top: 1px solid var(--hairline-color);
  padding: var(--small-padding) 0;
  display: grid;
  align-items: center;
  &> h2 {
    text-align: center; 
  }
`

const Order = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .6rem 1.6rem;
  border-bottom: 1px solid var(--hairline-color);
  &:last-child {
    border-bottom: none;
  }
`

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin:.2rem;
  overflow: hidden;
`

const Name = styled.h4`
  font-size: 1.2rem;
`

const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Link = styled.a`
  composes: item from 'part:@sanity/base/theme/layout/selectable-style';
  display: block;
  color: inherit;
  text-decoration: inherit;
  outline: none;
  padding: var(--small-padding) var(--medium-padding);
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`

const Button = styled.button`

`

const Footer = styled.div`
  composes: footer from 'part:@sanity/dashboard/widget-styles';
  border-top: 1px solid var(--hairline-color);
`


interface Props {
  apiKey: string;
  limit: string;
}

interface Orders {
  items: Array<any>;
}

const SnipcartOrders: React.FC<Props> = ({ apiKey, limit }:Props) => {
  // const {secrets} = useSecrets(namespace)
  // const [showSettings, setShowSettings] = useState(false)

  const [ordersState, setOrdersState] = useState<Orders | null>(null)

  const handleGetOrders = async () => {
    
    const request = await fetch(`https://app.snipcart.com/api/orders?limit=${limit}`, {
      headers: {
          'Authorization': `Basic ${btoa(apiKey)}`,
          'Accept': 'application/json',
      }
    })
    const orders:Orders = await request.json(); 
    return setOrdersState(orders);
  }

  useEffect(() => {
    handleGetOrders();
  });

  // useEffect(() => {
  //   if (!secrets) { setShowSettings(true)}
  // }, [secrets])
  
    if (ordersState === null || ordersState == undefined) {
      return (
        <>
        <GlobalStyle />
        {/* {showSettings && (
          <SettingsView
            namespace={namespace}
            keys={pluginConfigKeys}
            onClose={() => {
              setShowSettings(false)
            }}
          />
        )} */}
        <Container>
        <Header>
          <Title>Orders</Title>
        </Header>
        <Content>
          <h2>Loading...</h2>
        </Content>
      </Container>
      </>
      )
    // eslint-disable-next-line no-else-return
    } else {
    return (
      <>
      <GlobalStyle />
      {/* {showSettings && (
          <SettingsView
            namespace={namespace}
            keys={pluginConfigKeys}
            onClose={() => {
              setShowSettings(false)
            }}
          />
        )} */}
      <Container>
        <Header>
          <Title>Orders</Title>
        </Header>
        <Content>
          {ordersState.items && ordersState.items.map(order =>
            <Order key={order.invoiceNumber}>
                {/* <Avatar
                  alt={order.user.billingAddress.fullName + "'s Avatar"}
                  color="blue"
                  src={order.user.gravatarUrl} 
                  size={2}
                  style={{margin: 'auto'}}
                /> */}
                <Link title="view invoice" href={`https://app.snipcart.com/dashboard/orders/${order.token}`}>
                  <Name>{order.user.billingAddress.fullName} spent ${order.finalGrandTotal} at {new Date(order.completionDate).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</Name>
                </Link>
                <Status>
                  <p>status</p>
                  <p>{order.status == "Processed" ? "✅" : "❌"}</p>
                </Status>
            </Order>
          )} 
        </Content>
        <Footer>
            <Button 
              onClick={() => handleGetOrders()}
            > Refresh </Button>
          </Footer>
      </Container>
      </>
    ) }
  }
// }

export default {
  name: 'snipcart-orders',
  component: SnipcartOrders
}
