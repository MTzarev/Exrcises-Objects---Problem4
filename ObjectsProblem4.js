function objectProblem4(input) {
    let obj = {};
    for (word of input) {
        let [day, info] = word.split(` - `);
        if (day[word] !== "Monday" ||
            day[word] !== "Thuesday" ||
            day[word] !== "Wednesday" ||
            day[word] !== "Thurstday" ||
            day[word] !== "Friday" ||
            day[word] !== "Saturday" ||
            day[word] !== "Sunday") {
            day[word] = info
        }
        if (!obj[day]) {
            obj[day] = info;
        } else {
            obj[day] += `, ` + info;
        }
    }
    for (meet in obj) {
        console.log(`${meet}: ${obj[meet]}`);
    }
    console.log();
}
objectProblem4(['Monday -  Peter',
    'Thuestday - Maya',
    'Friday - Grigor',
    'Wednesday - Gergina',
    `Monday - Dragina`,
    `Sundey - WeekEnd`]);
