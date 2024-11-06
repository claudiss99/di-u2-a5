import styles from './styles.css'
export default function Clock({ time }) {
    let hours = time.getHours();
    let estilo;

    if (hours >= 0 && hours <= 6) {
      estilo = 'night'
    } else {
      estilo = 'day'
    }
    return(
      <h1 id="time" className={estilo}>
        {time.toLocaleTimeString()}
      </h1>
    );
  }
  