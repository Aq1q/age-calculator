import { useState, useEffect } from "react";
import moment from 'moment';

const Overview = (props) => {

    const birthDate = moment(props.year+props.month+props.day, 'YYYYMMDD');

    const [localYear, setLocalYear] = useState('--');
    const [localMonth, setLocalMonth] = useState('--');
    const [localDay, setLocalDay] = useState('--');
    
    useEffect(() => {
        if(props.isValid) {
            const currentDate = new Date();
            const date = moment((''+currentDate.getFullYear())+("0" + (currentDate.getMonth() + 1)).slice(-2)+ 
                ("0" + (currentDate.getDay() + 1)).slice(-2), 'YYYYMMDD');
                
            setLocalDay(moment.duration(date.diff(birthDate)).days());
            setLocalMonth(moment.duration(date.diff(birthDate)).months());
            setLocalYear(moment.duration(date.diff(birthDate)).years());
        } else {
            setLocalDay('--');
            setLocalMonth('--');
            setLocalYear('--');
        }
    }, [birthDate, props.day, props.isValid])

    return (
        <div id="age-display">
            <h1 className="age-heading"><span className="age-span">{localYear}</span> years</h1>
            <h1 className="age-heading"><span className="age-span">{localMonth}</span> months</h1>
            <h1 className="age-heading"><span className="age-span">{localDay}</span> days</h1>
        </div>
    );
}

export default Overview;