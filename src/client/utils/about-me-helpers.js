import moment from 'moment';

export const getYearsActive = () => {
    var start = moment([2015, 9]);
    return start.diff(Date.now());
};