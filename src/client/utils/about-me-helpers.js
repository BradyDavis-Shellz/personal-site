import {differenceInCalendarYears} from 'date-fns';

const startDate = new Date(2015, 9);

export const getYearsActive = () => differenceInCalendarYears(Date.now(), startDate);
