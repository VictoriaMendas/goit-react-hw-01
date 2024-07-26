import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';
export default function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
