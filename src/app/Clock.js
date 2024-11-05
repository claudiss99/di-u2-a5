/**
 * 
export default function Clock({ time }) {
    let hours = time.getHours();

    if (hours >= 0 && hours <= 6) {
      document.getElementById('time').className = 'night';
    } else {
      document.getElementById('time').className = 'day';
    }
    return (
      <h1 id="time">
        {time.toLocaleTimeString()}
      </h1>
    );
  }
 */
  export default function Clock({ time }) {
    const hours = time.getHours();
    const isNight = hours >= 0 && hours <= 6; // Determina si es "noche" o "día"
    
    return (
      <h1 id="time" className={isNight ? 'night' : 'day'}>
        {time.toLocaleTimeString()}
      </h1>
    );
  }
  