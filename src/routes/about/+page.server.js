export async function load() {

    pageCount = 0;

    try {
        const response = await fetch(`https://hearthstone.blizzard.com/en-us/api/community/leaderboardsData?region=EU&leaderboardId=standard&page=${pageCount}&seasonId=135&blzcmp=app`);

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();

        console.log('Fetched data from leaderboards:', data);

        if (findRankByAccountId(data, 'Razer') == -1) {
            pageCount++;
        };

        return { hsLeaderboardsData: data };
    } catch (error) {
        console.error('Error fetching data:', error);

        return { apiData: [] };
    }
}

function findRankByAccountId(data, accountId) {

    let rows = data.leaderboard.rows;

    for (let i = 0; i < rows.length; i++) {
        if (rows[i].accountid === accountId) {
            return rows[i].rank;
        }
    }

    return -1;
}

function fetchLeaderboardsData() {
    return fetch(`https://hearthstone.blizzard.com/en-us/api/community/leaderboardsData?region=EU&leaderboardId=standard&page=${pageCount}&seasonId=135&blzcmp=app`);
}