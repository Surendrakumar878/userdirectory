import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Clock = ({ timezone="America/Indiana/Winamac" }) => {
  const [time, setTime] = useState(new Date());
  const [isPaused, setPaused] = useState(false);
  const [timezones, setTimezones] = useState([]);
  const [selectedTimezone, setSelectedTimezone] = useState('');
 
console.log(selectedTimezone)
  useEffect(() => {
    // Fetch the list of timezones
    axios.get('http://worldtimeapi.org/api/timezone').then((response) => {
      setTimezones(response.data);
      console.log(response.data)
      // Set the default timezone (you can choose a default based on the user data)
      setSelectedTimezone(response.data[0]);
    }).catch((e)=>{
      console.log(e)
    })
  }, []);
  useEffect(() => {

  
    const interval = setInterval(() => {
      // axios.get(`http://worldtimeapi.org/api/timezone/${timezone}`).then((response) => {
      //   setTime(new Date(response.data.utc_datetime));
      // });
      // if (!isPaused&&selectedTimezone) {
      //   axios.get(`http://worldtimeapi.org/api/timezone/${selectedTimezone}`).then((response) => {
      //     console.log(response.data)
      //     setTime(new Date(response.data.datetime));
      //   }).catch((e)=>{
      //     console.log(e)
      //   })
      // }
     
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedTimezone,isPaused]);

  const formatTime = (date,selectedTimezone) => {
    console.log(selectedTimezone)
    let aa=new Intl.DateTimeFormat('en-GB', {
    
      timeStyle: 'medium',
      // timeZone:  selectedTimezone && `${selectedTimezone}`,
    }).format(date)
    return  aa

  };
  const handlePauseToggle = () => {
    setPaused(!isPaused);
  };

  const handleTimeZoneChange = (event) => {
    const selectedTimeZone = event.target.value;
    setSelectedTimezone(selectedTimeZone);
    // onTimeZoneChange(selectedTimeZone);
  };
  console.log(time)
  return (
    <div className="clock">
       <label htmlFor="timezone">Select Timezone: </label>
      <select id="timezone" value={selectedTimezone} onChange={handleTimeZoneChange}>
        {timezones?.map((timezone) => (
          <option key={timezone} value={timezone}>
            {timezone}
          </option>
        ))}
      </select>
      <div className="time">{formatTime(time,selectedTimezone)}</div>
      <button onClick={handlePauseToggle}>{isPaused ? 'Start' : 'Pause'}</button>
    </div>
  );
};

export default Clock;
