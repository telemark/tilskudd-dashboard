export default ({ title, number }) => (
  <div className={'card'}>
    <h2>{title}</h2>
    <p className={number > 0 ? 'red' : 'green'}>{number}</p>
    <style jsx>
      {`
      .card {
        padding: 10px;
        border-radius: 0;
        background-color: #FFF;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
      }
      p {
        font-weight: 300;
        font-size: 112px;
        line-height: 112px;
        margin: 0;
      }
      .red {
        color: red;
      }
      .green {
        color: green;
      }
    `}
    </style>
  </div>
)
