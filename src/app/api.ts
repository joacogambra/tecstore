import { Match } from './types'

const api = {
    match:{
        list: async(): Promise<Match[]> => {
            return fetch(
                'https://docs.google.com/spreadsheets/d/e/2PACX-1vRH6eHvw4Y2JkhoJl-JWp5T2azckYHNbs3nlfj_THEadrSmYk-DeHmuIylfVWO0XebUnd3yTzR8OK_X/pub?output=tsv'
            ).then((res) => res.text())
            .then(text =>{
                return text.split('\n').slice(1).map(row=>{
                    const[date, team1, team2, goals1, goals2] = row.split('\t')

                    return{
                        date,
                        team1,
                        team2,
                        goals1,
                        goals2
                    }
                })
            }) 
        }
    }
}

export default api