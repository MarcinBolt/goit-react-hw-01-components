import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from 'utils/get-random-hex-color';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
      {stats.map(s => (
        <li
          className={css.item}
          key={s.id}
          style={{ backgroundColor: `${getRandomHexColor()}` }}
        >
          <span className={css.label}>{s.label}</span>
          <span className={css.percentage}>{s.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
