import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.cards}>
      <div className={css.contentList}>
        <img src={avatar} alt={name} width="48" />
        <p className={css.title}>{name}</p>
        <p className={isOnline ? css.on : css.off}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </div>
  );
}
