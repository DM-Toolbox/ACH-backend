const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('resistances', () => {
  beforeEach(() => {
    return setup(pool);
  });
  afterAll(() => {
    pool.end();
  });

  it('GET resistances should return a list of all resistances', async () => {
    const resp = await request(app).get('/api/v1/resistances');
    expect(resp.status).toBe(200);
    expect(resp.body[0]).toMatchInlineSnapshot(`
      Object {
        "dieValue": 1,
        "id": "1",
        "resistanceType": "Acid",
      }
    `);
  });

  it('GET api/v1/resistances/2 should return the 2nd resistance in the resistances table', async () => {
    const resp = await request(app).get('/api/v1/resistances/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "dieValue": 2,
        "id": "2",
        "resistanceType": "Cold",
      }
    `);
  });
});
