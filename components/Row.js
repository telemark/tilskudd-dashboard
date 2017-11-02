export default ({ children }) => (
  <div>
    <div className={'row'}>
      { children }
    </div>
    <style jsx>
      {`
        .row {
          display: flex;
          justify-content: space-evenly;
        }
        @media screen and (max-width: 600px) {
          .row {
            flex-direction: column;
          }
        }
      `}
    </style>
  </div>
)
