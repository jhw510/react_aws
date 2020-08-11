import React, {useState} from 'react'
import moment from 'moment'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker,{Calendar, utils} from 'react-modern-calendar-datepicker';
import '../attendanceMain.css'
import { render } from '@testing-library/react';


 export const ACalendar = () => {
    const [selectedDay, setSelectedDay] = useState(utils().getToday());
    const minimumDate = {year: 2020, month: 3, day: 30};
    const maximumDate = {year: 2020, month: 9, day: 4}
      
    const renderCustomInput = ({ ref }) => (
        <input 
          readOnly = "true"
          ref={ref} 
          placeholder="Select a Day"
          value ={`${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`}
          style={{
            textAlign: 'center',
            padding: '0.3rem 0.5rem',
            fontSize: 'medium',
            border: '1px solid #184f90',
            borderRadius: '50px',
            boxShadow: '0 0.5rem 1rem rgba(156, 136, 255, 0.2)',
            color: '#184f90',
            outline: 'none',
            margin : '0.3rem'
          }}
          className="my-custom-input-class" 
        />
      )
    const renderCalendarInput = ({ ref }) => (
    <input
        ref={ref} 
        value ={`${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`}
        style={{
        width : '100%',
        height : '100%',
        }}
        className="my-custom-input-class" 
    />
    ) 
     
    return (
          <>
            <div>
            <DatePicker 
            value={selectedDay}
            onChange={setSelectedDay}
            renderInput={renderCustomInput}
            inputClassName="my-custom-input-class" 
            shouldHighlightWeekends
            />
            
            </div>
            
            <div>
            <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            colorPrimary="#00365a" 
            calendarClassName="custom-calendar" 
            shouldHighlightWeekends
            /> 
            </div>
          </>
      )
  }
  export default ACalendar;