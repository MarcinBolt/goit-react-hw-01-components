import PropTypes from 'prop-types';
import css from './Statistics.module.css';
// import data from './data.json';
import { getRandomHexColor } from 'view/get-random-hex-color';

export const Statistics = ({ title = '', stats }) => (
  <section className={css.statistics}>
    {title ? <h2 className={css.title}>{title}</h2> : <></>}

    <ul className={css.statList}>
      {stats.map(s => (
        <li
          className={css.item} id={s.id}
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
  stats: PropTypes.array,
};