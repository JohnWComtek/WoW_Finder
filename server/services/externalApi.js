const axios = require('axios');

class ExternalApiService {
  constructor() {
    this.raiderIOBaseUrl = 'https://raider.io/api/v1';
    this.warcraftLogsBaseUrl = 'https://www.warcraftlogs.com/api/v2';
  }

  async getRaiderIOProfile(character, realm, region = 'us') {
    try {
      const response = await axios.get(`${this.raiderIOBaseUrl}/characters/profile`, {
        params: {
          region,
          realm,
          name: character,
          fields: 'mythic_plus_scores_by_season:current,raid_progression',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Raider.IO API Error:', error.message);
      throw new Error('Failed to fetch Raider.IO profile');
    }
  }

  async getWarcraftLogs(character, realm, region = 'us') {
    try {
      // Note: This requires OAuth2 authentication with client credentials
      const token = await this.getWarcraftLogsToken();
      
      const query = `
        query {
          characterData {
            character(name: "${character}", serverSlug: "${realm}", serverRegion: "${region}") {
              id
              name
              classID
              recentReports(limit: 5) {
                data {
                  code
                  startTime
                  endTime
                  zone {
                    name
                  }
                }
              }
            }
          }
        }
      `;

      const response = await axios.post(this.warcraftLogsBaseUrl, {
        query,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Warcraft Logs API Error:', error.message);
      throw new Error('Failed to fetch Warcraft Logs data');
    }
  }

  async getWarcraftLogsToken() {
    try {
      const response = await axios.post('https://www.warcraftlogs.com/oauth/token', {
        grant_type: 'client_credentials',
      }, {
        auth: {
          username: process.env.WARCRAFTLOGS_CLIENT_ID,
          password: process.env.WARCRAFTLOGS_CLIENT_SECRET,
        },
      });
      return response.data.access_token;
    } catch (error) {
      console.error('Warcraft Logs Token Error:', error.message);
      throw new Error('Failed to get Warcraft Logs access token');
    }
  }

  // Combine both API calls for a complete player profile
  async getCompletePlayerProfile(character, realm, region = 'us') {
    try {
      const [raiderIOData, warcraftLogsData] = await Promise.all([
        this.getRaiderIOProfile(character, realm, region),
        this.getWarcraftLogs(character, realm, region),
      ]);

      return {
        raiderIO: raiderIOData,
        warcraftLogs: warcraftLogsData,
      };
    } catch (error) {
      console.error('API Integration Error:', error.message);
      throw error;
    }
  }
}

module.exports = new ExternalApiService(); 