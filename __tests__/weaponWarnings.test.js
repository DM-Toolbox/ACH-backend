const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('weapons', () => {
  beforeEach(() => {
    return setup(pool);
  });
  afterAll(() => {
    pool.end();
  });

  it('GET weaponWarnings should return the entire list of Weapon Warnings', async () => {
    const resp = await request(app).get('/api/v1/weaponWarnings');
    expect(resp.status).toBe(200);
    expect(resp.body[0]).toMatchInlineSnapshot(`
      Object {
        "dieValue": 1,
        "id": "1",
        "weaponType": "Club of Warning",
      }
    `);
  });

  it('GET /api/v1/weaponWarnings/2 should return the 2nd Weapon Warning', async () => {
    const resp = await request(app).get('/api/v1/weaponWarnings/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "dieValue": 2,
        "id": "2",
        "weaponType": "Dagger of Warning",
      }
    `);
  });
});
