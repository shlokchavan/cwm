import moment from 'moment';

export const dateTimeFormatter: any = (timestamp: any) => {
  return timestamp ? moment(timestamp).format('DD MMM YYYY,  HH:mm A') : '-';
};
