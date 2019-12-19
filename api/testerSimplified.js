const fixtures = require('./assets/fixturesligue1')
const data = require('./assets/L1oddsSimplified')
if (data.api.results>10) {console.log('Goodbye World')}

const matches = fixtures.api.fixtures
const odds = data.api.odds
const myReturn = []

odds.map((x,v) => matches.map(z => z.fixture_id === x.fixture.fixture_id?myReturn.push({homeTeam:{teamName:z.homeTeam.team_name, teamLogo:z.homeTeam.logo},awayTeam:{teamName: z.awayTeam.team_name, teamLogo:z.homeTeam.logo}}):'' )
&
 (x.bookmakers.map(y =>y.bookmaker_id===8?myReturn[v]={...myReturn[v], odds:y.bets[0].values}:'' )))
module.exports=myReturn