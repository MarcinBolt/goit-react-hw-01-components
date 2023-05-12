import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th className={css.transactionHistory_head}>Type</th>
        <th className={css.transactionHistory_head}>Amount</th>
        <th className={css.transactionHistory_head}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(i => (
        <tr
          className={`${css.transactionHistory__item} ${
            items.indexOf(i) % 2 ? css.darkBackground : css.lightBackground
          }`}
          key={i.id}
        >
          <td className={css.transactionHistory__itemType}>{i.type}</td>
          <td className={css.transactionHistory__itemAmount}>{i.amount}</td>
          <td className={css.transactionHistory__itemCurrency}>{i.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
