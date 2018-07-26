export default (string) => {
    let str = string.split("@bot ")[1];
    let res = commands.some(el => {
        if (str.indexOf(el) === 0) {
            let arg = str.split(el);
            console.log(arg)
            if( arg[0] === "What is the weather") {
                
            }
        }
    });
    console.log(res);
}

const commands = ["What is the weather", "Convert", "Save note", "Show note list", "Show note", "Delete note", "Show quote"]

const weatherData = [
    {
        city: "Lviv",
        weather: [
            {day: "Monday", temperature: 19},
            {day: "Tuesday", temperature: 15},
            {day: "Wednesday", temperature: 18},
            {day: "Thursday", temperature: 15},
            {day: "Friday", temperature: 17},
            {day: "Saturday", temperature: 15},
            {day: "Sunday", temperature: 16}
        ]
    },
    {
        city: "Dnipro",
        weather: [
            {day: "Monday", temperature: 22},
            {day: "Tuesday", temperature: 24},
            {day: "Wednesday", temperature: 18},
            {day: "Thursday", temperature: 15},
            {day: "Friday", temperature: 16},
            {day: "Saturday", temperature: 25},
            {day: "Sunday", temperature: 22}
        ]
    },
    {
        city: "Odessa",
        weather: [
            {day: "Monday", temperature: 33},
            {day: "Tuesday", temperature: 25},
            {day: "Wednesday", temperature: 18},
            {day: "Thursday", temperature: 22},
            {day: "Friday", temperature: 30},
            {day: "Saturday", temperature: 15},
            {day: "Sunday", temperature: 22}
        ]
    },
    {
        city: "Kharkiv",
        weather: [
            {day: "Monday", temperature: 30},
            {day: "Tuesday", temperature: 31},
            {day: "Wednesday", temperature: 32},
            {day: "Thursday", temperature: 33},
            {day: "Friday", temperature: 34},
            {day: "Saturday", temperature: 35},
            {day: "Sunday", temperature: 36}
        ]
    },
    {
        city: "Kyiv",
        weather: [
            {day: "Monday", temperature: 18},
            {day: "Tuesday", temperature: 19},
            {day: "Wednesday", temperature: 20},
            {day: "Thursday", temperature: 21},
            {day: "Friday", temperature: 22},
            {day: "Saturday", temperature: 23},
            {day: "Sunday", temperature: 24}
        ]
    }
]
    