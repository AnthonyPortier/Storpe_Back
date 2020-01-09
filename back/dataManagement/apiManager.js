const schedule = require('node-schedule')
const axios = require('axios')
const models = require('../models')
const url = "http://localhost:5000"
const apiUrl = "https://api-football-v1.p.rapidapi.com/v2"
const apiHeader = {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    "x-rapidapi-key": "b83b9990e7mshd384123d903f6a1p10dfd3jsn55c2c5a042bc"
} 

module.exports = function () {
    let count = 0
    let counter = 0
    let allExports = {
        fixtures:
        {
            api:
            {
                fixtures:
                    []
            }
        },
        odds:
        {
            api:
            {
                odds:
                    []
            }
        }
    }
    const matchResultCalculator = (homeTeamScore, awayTeamScore) => { //Returns 0 for a draw, 1 for a home win, 2 for a home loss.
        if (homeTeamScore === awayTeamScore) {
            return 0
        }
        if (homeTeamScore > awayTeamScore) {
            return 1
        }
        if (homeTeamScore < awayTeamScore) {
            return 2
        }
    }


    const WeeklyUpdate = schedule.scheduleJob("2 0 * * 1", async () => {
        try {
            const response = await axios.get(apiUrl + "/fixtures/league/525", { headers: apiHeader })
            const oddsResponse = await axios.get(apiUrl + "/odds/league/525/label/1", { headers: apiHeader })
            //
            allExports.fixtures = response.data
            allExports.odds = oddsResponse.data
            count = count + 1
            console.log(allExports.odds)
            console.log(`The weekly update has been done ${count} times.`)
            // Sets up a brand new list of matches and odds, and sets them up for export.
        }
        catch (error) {
            console.log(error)
        }
    }
    )
    WeeklyUpdate.schedule(new Date())
    const checkMatches = schedule.scheduleJob("5 0 * * *", async () => {
        try {
            const response = await axios.get("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/525", { headers: apiHeader })
            const AllUpdatedMatches = response.data.api.fixtures
            const oddsResponse = await axios.get("odds/league/525/label/1", { headers: apiHeader })
            console.log(response)
            console.log(AllUpdatedMatches)
            const allUpdatedOdds = oddsResponse.data.api.odds
            counter = counter + 1
            console.log(`The daily update has been done ${counter} times.`)
            // checks if odds are different and updates them everyday.
            AllUpdatedMatches.map(matchAfterUpdate => {
                // Maps on the updated fixtures then, for each, if they exist in the map of the updated odds,
                // updates the database with the new odds.
                allUpdatedOdds.map(async matchWithUpdatedOdds => {

                    if (matchAfterUpdate.fixture_id === matchWithUpdatedOdds.fixture.fixture_id) {
                        await models.Match.update({
                            odd_home: matchWithUpdatedOdds.bookmakers[2].bets[0].values[0].odd,
                            odd_draw: matchWithUpdatedOdds.bookmakers[2].bets[0].values[1].odd,
                            odd_away: matchWithUpdatedOdds.bookmakers[2].bets[0].values[2].odd
                        },
                            {
                                where: {
                                    homeTeam: matchAfterUpdate.homeTeam.team_name,
                                    awayTeam: matchAfterUpdate.awayTeam.team_name,
                                    date_match: matchAfterUpdate.event_date
                                }
                            })
                    }
                })

            }

            )
            // checks if matches in the current roster are finished, if yes, has to communicate the winner to the DB.
            models.Match.findAll()
                .then(x => {
                    AllUpdatedMatches.map(matchAfterUpdate => {
                        x.map(async matchBeforeUpdate => {
                            if (matchAfterUpdate.statusShort === "FT"
                                && matchBeforeUpdate.hometeam === matchAfterUpdate.homeTeam.team_name
                                && matchBeforeUpdate.awayteam === matchAfterUpdate.awayTeam.team_name
                                && matchBeforeUpdate.date_match === matchAfterUpdate.event_date
                                && matchBeforeUpdate.result_match === null) {

                                const updatedMatch = {
                                    id: matchBeforeUpdate.id,
                                    result: matchResultCalculator(matchAfterUpdate.goalsHomeTeam, matchAfterUpdate.goalsAwayTeam)
                                }
                                await axios.put(url + "/match", updatedMatch)
                            }
                        })
                    })
                })
        }
        catch (error) {
            console.log(error)
        }
    }
    )


    const dataManager = (data) => {
        const myReturn = []
        const keepTrack = []
        let myCounter = 0 
        ///////
        const matches = data.fixtures.api.fixtures
        const odds = data.odds.api.odds
        console.log('here', odds)
        console.log("hay")
        odds.map(x => {
            matches.map(z => {
                z.fixture_id === x.fixture.fixture_id
                    && z.status === 'Not Started'
                    ?
                    keepTrack.push({ returnId: myCounter, fixtureId: z.fixture_id })
                    & myReturn.push({ homeTeam: z.homeTeam.team_name, logo_homeTeam: z.homeTeam.logo, awayTeam: z.awayTeam.team_name, logo_awayTeam: z.awayTeam.logo, sport: 'football', date_match: z.event_date })
                    & (myCounter += 1)
                    : ''
            }
            )
        })

        odds.map(o => {
            let betHome = o.bookmakers[2].bets[0].values[0].odd
            let betDraw = o.bookmakers[2].bets[0].values[1].odd
            let betAway = o.bookmakers[2].bets[0].values[2].odd
            keepTrack.map(p => { // Identifies the games already in the returned object and attributes the odds to it
                if (o.fixture.fixture_id === p.fixtureId) {
                    myReturn[p.returnId] = { ...myReturn[p.returnId], odd_home: betHome, odd_draw: betDraw, odd_away: betAway }
                }
            }
            )
        })

        setTimeout(() => {
            console.log("my return :", myReturn)
            axios.post(url + '/populate/matches', myReturn).then(response => response).catch(error => { console.log(error) })
        }, 6000)


    }
    setTimeout(() => { dataManager(allExports)}, 6000)
}