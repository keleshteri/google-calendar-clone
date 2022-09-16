import dayjs from 'dayjs';

export function getMonth(month = dayjs().month()){
    //get year
    const year = dayjs().year();
    
    /**
     * get 1st day of month.
     * Get the day of the week.
     * Returns numbers from 0 (Sunday) to 6 (Saturday).
     ***/
    const firstDayOfTheMonth = dayjs(new Date(year,month,1)).day();
    //
    let currentMonthCount= 0-firstDayOfTheMonth;

    /**
     * create a Array for days in month 
     */
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() =>{
            currentMonthCount++
            return dayjs(new Date(year, month, currentMonthCount))
        })
    })

    return daysMatrix;
}