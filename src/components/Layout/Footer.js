const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={pStyle}>
        The code for this "app" can be found <a href='https://github.com/karlm89/react_blog'>here</a>
      </p>
    </footer>
  )
}

const footerStyle = {
  color: 'white',
  width: '100%',
  backgroundColor: '#22252A',
  textAlign: 'center',
  padding: '10px',
  bottom: '0px',
  position: 'fixed',
}

const pStyle = {
  margin: '0',
  padding: '0',
}

export default Footer
