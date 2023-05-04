import { useState, useEffect } from "react";
import moment from 'moment';

const Inputs = (props) => {

    const [dayError, setDayError] = useState('This field is required');
    const [monthError, setMonthError] = useState('This field is required');
    const [yearError, setYearError] = useState('This field is required');
    const [dayPattern] = useState(/0[1-9]|[12][0-9]|3[01]/);
    const [isValidDay, setIsValidDay] = useState(false);
    const [isValidMonth, setIsValidMonth] = useState(false);
    const [isValidYear, setIsValidYear] = useState(false);

    const currentYear = new Date().getFullYear();

    //Change Error massages
    useEffect(() => {
        if(moment(props.year+props.month+props.day, 'YYYYMMDD').isValid()){

        if(!props.day) {            
            const d = document.getElementById('day');
            d.setCustomValidity('empty')
            setDayError('This field is required');
            setIsValidDay(false);
        } else if(!dayPattern.test(props.day)) {
            console.log(dayPattern.test(props.day))
            setDayError('Must be a valid day');
            const d = document.getElementById('day');
            d.setCustomValidity('Wrong Pattern');
            setIsValidDay(false);
        } else {
            const d = document.getElementById('day');
            d.setCustomValidity('');
            setIsValidDay(true);
        }
        
        if(!props.month) {
            setMonthError('This field is required');
            const m = document.getElementById('month');
            m.setCustomValidity('empty');
            setIsValidMonth(false);
        } else if(props.month > 12 || props.month.length < 2) {
            setMonthError('Must be a valid month');
            setIsValidMonth(false);
        } else {
            const m = document.getElementById('month');
            m.setCustomValidity('');
            setIsValidMonth(true);
        }

       if (props.year > currentYear) {
            const y = document.getElementById('year');
            y.setCustomValidity('To much in the future');
            setYearError('Must be in past');
            setIsValidYear(false);
        } else if(!props.year) {
            setYearError('This field is required');
            const y = document.getElementById('year');
            y.setCustomValidity('empty');
            setIsValidYear(false);
        } else if(props.year.length < 4)  {
            setYearError('Must be a valid year');
            setIsValidYear(false);
        } else {
            const y = document.getElementById('year');
            y.setCustomValidity('');
            setIsValidYear(true);
        }
        if(isValidYear && isValidMonth && isValidDay) {
            props.setIsValid(true);
        } else {
            props.setIsValid(false);
        }
    } else {
        props.setIsValid(false);
        setYearError('');
        setMonthError('');
        setDayError('Must be a valid date');

        const y = document.getElementById('year');
        y.setCustomValidity('Invalid Date');

        const m = document.getElementById('month');
        m.setCustomValidity('Invalid Date');

        const d = document.getElementById('day');
        d.setCustomValidity('Invalid Date');
    }
        
    }, [currentYear, dayPattern, isValidDay, isValidMonth, isValidYear, props, props.day, props.month, props.year]); 

    useEffect(() =>{
        const d = document.getElementById('day');
        d.setCustomValidity('');

        const m = document.getElementById('month');
        m.setCustomValidity('');

        const y = document.getElementById('year');
        y.setCustomValidity('');

    }, []);

        return (
            <div id={'form-container'}>
                <form>
                <section className={'input-sec'}>
                    <input id={'day'} type={'text'} placeholder="DD" onChange={(e) => {
                        props.setDay(e.target.value);
                        }} />
                    <label htmlFor={'day'} className={'label'}>
                    DAY
                    </label>
                    <span>{dayError}</span>
                </section>
                <section className={'input-sec'}>
                    <input id={'month'} type={'text'} placeholder="MM" pattern={'0[1-9]|1[0-2]'} onChange={(e) => {
                        props.setMonth(e.target.value);
                    }} />
                    <label htmlFor={'month'} className={'label'}>
                    MONTH
                    </label>
                    <span>{monthError}</span>
                </section>
                <section className={'input-sec'}>
                    <input id={'year'} type={'text'} placeholder="YYYY" pattern={'[0-9]{4}'} onChange={(e) => {
                        props.setYear(e.target.value);
                        }} />
                    <label htmlFor={'year'} className={'label'}>
                    YEAR
                    </label>
                    <span>{yearError}</span>
                </section>
                </form>
            </div>
      )
}

export default Inputs