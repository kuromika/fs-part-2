
export const Notification = ({ notification }) => {
  
  if (!notification.message) {
    return null;
  }

  return (
    <p className={`notification ${notification.type}`}>{notification.message}</p>
  )
}