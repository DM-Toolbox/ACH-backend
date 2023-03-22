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

  it('GET weapons should return list of all weapons', async () => {
    const resp = await request(app).get('/api/v1/weapons');
    expect(resp.status).toBe(200);
    expect(resp.body[0]).toMatchInlineSnapshot(`
      Object {
        "dieValue": 1,
        "id": "1",
        "weaponType": "Club",
      }
    `);
  });

  it('GET /api/v1/weapons/2 should return the 2nd weapon in the weapons table', async () => {
    const resp = await request(app).get('/api/v1/weapons/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "dieValue": 2,
        "id": "2",
        "weaponType": "Dagger",
      }
    `);
  });
});
