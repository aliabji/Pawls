import { format } from 'date-fns'

export const getLocalLongTime = (date: Date) => {
    return format(date, 'p');
};
