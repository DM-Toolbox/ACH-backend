const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('dragon', () => {
  beforeEach(() => {
    return setup(pool);
  });
  afterAll(() => {
    pool.end();
  });

  it('GET dragons should return list of all dragons', async () => {
    const resp = await request(app).get('/api/v1/dragons');
    expect(resp.status).toBe(200);
    expect(resp.body[0]).toMatchInlineSnapshot(`
      Object {
        "dieValue": 1,
        "dragonType": "Black",
        "id": "1",
        "resistanceType": "Acid",
      }
    `);
  });

  it('GET api/v1/dragons/2 should return 2nd dragon from dragons', async () => {
    const resp = await request(app).get('/api/v1/dragons/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "dieValue": 2,
        "dragonType": "Gold",
        "id": "2",
        "resistanceType": "Fire",
      }
    `);
  });
});
