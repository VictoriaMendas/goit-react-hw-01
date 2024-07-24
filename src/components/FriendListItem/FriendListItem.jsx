import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={isOnline ? css.on : css.off}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
