import { ForecastList } from './forecast-list';

export interface MainForecast {

    "cod": string,
    "message": number,
    "cnt": number,
    "list": ForecastList[],
    "city": {
        "id": number,
        "name": string,
        "coord": {
            "lat": number,
            "lon": number
        },
        "country": string,
        "population": number,
        "timezone": number,
        "sunrise": number,
        "sunset": number
    }
}

