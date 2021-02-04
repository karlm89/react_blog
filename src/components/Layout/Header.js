import Navibar from './Navibar'

const Header = () => {
  return (
    <header style={ headerStyle }>
        <Navibar />
    </header>
  )
}

const headerStyle = {
  top: '0px',
  width: '100%',
  zIndex: '1',
	position: 'fixed',
}

export default Header