import s from "./Nitification.module.css";

function Notification({ message }) {
  return <p className={s.notification}>{message}</p>;
}

export default Notification;
