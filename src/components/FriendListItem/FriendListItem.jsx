import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const Friend = ({ friends }) => (
  <>
    {friends.map(f => (
      <li className={css.item} key={f.id}>
        <span
          className={`${css.status} ${
            f.isOnline === true ? css.online : css.offline
          }`}
        ></span>
        <img
          className={css.avatar}
          src={f.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{f.name}</p>
      </li>
    ))}
  </>
);

Friend.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
