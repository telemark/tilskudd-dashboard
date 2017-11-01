import Head from './head'
import Navbar from './Navbar'

export default ({ children }) => (
  <div>
    <Head />
    <Navbar title={'Dashboard Tilskudd'} />
    <div className={'wrapper'}>
      { children }
    </div>
    <style jsx global>
      {`
        html, body {
          padding: 0;
          margin: 0;
          background: white;
          color: black;
          font-family: "Georgia", "Times", "Times New Roman", serif;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: "Gill Sans", "Arial", sans-serif;
        }

        .wrapper {
          padding: 0 15px 0 15px;
        }
      `}
    </style>
  </div>
)
