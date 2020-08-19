import React, {useState } from 'react';
import {
    CalendarWrapper,
    CalendarContainer,
    PagingButton,
    Day,
    DayHeader
} from './CalendarComponents'
import moment from 'moment';

export const Calendar = () => {
    const [date, setDate] = useState(moment(new Date()));
  
    const createDaysOfMonth = (refDate) => {
        const date = moment(refDate).endOf('month');
        const lastDate = date.date();
        const firstWeekday = date.startOf('month').day();

        const calendarDays = [];
        const today = moment();

        for (let w=0; w<firstWeekday; w++) {
            calendarDays.push(<Day key={Math.random()}/>); // empty days
        }

        for (let d=1; d<lastDate; d++) {
            calendarDays.push(<Day key={d} today={date.date(d).isSame(today, 'day')}>{d}</Day>);
        }

        while (calendarDays.length % 7 !== 0) {
            calendarDays.push(<Day key={Math.random()}/>);
        }
        
        return calendarDays;
    }

    const prevMonth =() =>{
        setDate(moment(date).subtract(1, 'month'));
    }
      
    const nextMonth = () => {
        setDate(moment(date).add(1, 'month'));
    }

    return (
        <CalendarWrapper>
                <h2>{date.format('MMMM YYYY')}</h2>
            <div>
                <PagingButton onClick={prevMonth}>&lt;</PagingButton>
                <PagingButton onClick={nextMonth}>&gt;</PagingButton>
            </div>
            <CalendarContainer>
                <DayHeader>Domingo</DayHeader>
                <DayHeader>Lunes</DayHeader>
                <DayHeader>Martes</DayHeader>
                <DayHeader>Miercoles</DayHeader>
                <DayHeader>Jueves</DayHeader>
                <DayHeader>Viernes</DayHeader>
                <DayHeader>Sabado</DayHeader>
                {createDaysOfMonth(date)}
            </CalendarContainer>
        </CalendarWrapper>
    )

}
