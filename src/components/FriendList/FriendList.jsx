import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
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
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};
