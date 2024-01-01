const getDateDifference = (dateTime = '2023-06-25T14:00:10Z') => {
    const previousDate = new Date(dateTime);
    const currentDate = new Date();
  
    const yearDiff = currentDate.getFullYear() - previousDate.getFullYear();
    const monthDiff = (currentDate.getMonth() - previousDate.getMonth()) + yearDiff * 12;
  
    if (yearDiff > 0) {
      return `${yearDiff} ${yearDiff === 1 ? 'year' : 'years'} ago`;
    } else if (monthDiff > 0) {
      return `${monthDiff} ${monthDiff === 1 ? 'month' : 'months'} ago`;
    } else {
      return '1 month ago';
    }
  };
  

  
  export default getDateDifference
  