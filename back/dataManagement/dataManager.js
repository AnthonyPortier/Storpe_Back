const fixtures = require('../assets/fixturesligue1')
const data = require('../assets/L1odds')

const matches = fixtures.api.fixtures
const odds = data.api.odds
const myReturn = []
const keepTrack = []
counter = 0

odds.map(x => {
    matches.map(z => z.fixture_id === x.fixture.fixture_id && z.status === 'Not Started' ?keepTrack.push({returnId:counter, fixtureId:z.fixture_id}) & myReturn.push({homeTeam: z.homeTeam.team_name, logo_homeTeam: z.homeTeam.logo, awayTeam: z.awayTeam.team_name, logo_awayTeam: z.awayTeam.logo, sport:'football', date_match: z.event_date}) & (counter+=1) : '')})

odds.map(o => {
    let betHome = o.bookmakers[2].bets[0].values[0].odd
    let betDraw = o.bookmakers[2].bets[0].values[1].odd
    let betAway = o.bookmakers[2].bets[0].values[2].odd
    keepTrack.map( p => {
    if (o.fixture.fixture_id ===p.fixtureId) {
        myReturn[p.returnId] = {...myReturn[p.returnId],  odd_home:betHome, odd_draw:betDraw,odd_away:betAway}
    }
}
)})
module.exports = myReturn