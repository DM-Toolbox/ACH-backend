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
    const resp = await request(app).get('/achievements');
    expect(resp.status).toBe(200);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
    });
  });
});
