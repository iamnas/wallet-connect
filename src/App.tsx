import { ConnectKitButton } from 'connectkit'

import { useAccount } from 'wagmi'

function App() {


  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20vh' }}>
        <ConnectKitButton />

        <div style={{ marginTop: '20px' }}>
        <MyComponent />
        </div>
      </div>
    </>
  )
}


export default App

const MyComponent = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>Disconnected</div>;
  return <div>Connected Wallet: {address}</div>;
};