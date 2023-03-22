const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('mounts', () => {
  beforeEach(() => {
    return setup(pool);
  });
  afterAll(() => {
    pool.end();
  });

  it('GET mounts should return list of all mounts', async () => {
    const resp = await request(app).get('/api/v1/mounts');
    expect(resp.status).toBe(200);
    expect(resp.body[0]).toMatchInlineSnapshot(`
      Object {
        "dieValue": 1,
        "id": "1",
        "mountType": "Camel",
      }
    `);
  });

  it('GET api/v1/mounts/2 should return the 2nd mount from mounts', async () => {
    const resp = await request(app).get('/api/v1/mounts/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "dieValue": 2,
        "id": "2",
        "mountType": "Donkey or Mule",
      }
    `);
  });
});
