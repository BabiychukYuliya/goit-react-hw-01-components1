import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.row} key={item.id}>
            <td className={css.item}>{item.type}</td>
            <td className={css.item}>{item.amount}</td>
            <td className={css.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
}