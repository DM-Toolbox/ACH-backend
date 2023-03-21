const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
// const UserService = require('../lib/services/UserService');
// const Achievements = require('../lib/models/Achievements');

describe('achievements', () => {
  beforeEach(() => {
    return setup(pool);
  });
  afterAll(() => {
    pool.end();
  });

  it('GET achievements should return list of achievements', async () => {
    const resp = await request(app).get('/api/v1/achievements');
    expect(resp.status).toBe(200);
    expect(resp.body[0]).toEqual({
      title: 'You Shall Be Called Tundra!',
      detail: 'Acquired A Mount',
      reward: 1,
      points: 2,
      id: '1',
    });
  });
});
