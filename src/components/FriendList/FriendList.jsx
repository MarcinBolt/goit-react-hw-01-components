import css from './FriendList.module.css';

export const FriendList = ({ friendListItem }) => (
  <ul className={css.friendList}>{friendListItem}</ul>
);
