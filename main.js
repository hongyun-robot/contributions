window.onload = function() {
    // 2024  (4 || 1)  (9 || 1)
    // 2023  (4 || 12) (8 || 0)
    const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
    const endDate = new Date();
    const endYear = endDate.getFullYear()
    const endMonth = endDate.getMonth() + 1;
    const endDay = endDate.getDate()
    const endTimeStamp = endDate.valueOf()
    const startDate = new Date(endYear - 1, endMonth === 1 ? 12 : endMonth - 1, endDay - 1)
    let isFirst = true;
    let curTimeStamp = startDate.valueOf()
    let html = '<div>'
    while(true) {
        const curDate = new Date(curTimeStamp)
        const curYear = curDate.getFullYear()
        const curMonth = curDate.getMonth() + 1
        const curDay = curDate.getDate()
        const curWeek = curDate.getDay()
        if (curWeek === 0) {
            html += '<div>'
        }
        if (isFirst) {
            for (let index = 0; index <= curWeek; index++) {
                html += '<span>' + index + '</span>'
            }
            isFirst = false
        } else {
            html += '<span>' + curWeek + '</span>'
        }
        if (curWeek === 6) {
            html += '</div>'
        }
        console.log(curYear, curMonth, curDay);
        curTimeStamp += MILLISECONDS_IN_DAY
        if (curTimeStamp > endTimeStamp) break;
    }
    html += '</div>'
    document.getElementById('outerBox').innerHTML = html
}