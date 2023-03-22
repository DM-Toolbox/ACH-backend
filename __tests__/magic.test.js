const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('magic', () => {
  beforeEach(() => {
    return setup(pool);
  });
  afterAll(() => {
    pool.end();
  });

  it('GET magicA should return list of magic table A items', async () => {
    const resp = await request(app).get('/api/v1/magicA');
    expect(resp.status).toBe(200);
    expect(resp.body[0]).toMatchInlineSnapshot(`
      Object {
        "chance": "01-50",
        "dieValue": 1,
        "id": "1",
        "item": "Potion of Healing",
      }
    `);
  });

  it('GET magicB should return list of magic table B items', async () => {
    const resp = await request(app).get('/api/v1/magicB');
    expect(resp.status).toBe(200);
    expect(resp.body[0]).toMatchInlineSnapshot(`
      Object {
        "chance": "01-15",
        "dieValue": 1,
        "id": "1",
        "item": "Potion of Greater Healing",
      }
    `);
  });

  it('GET magicC should return list of magic table C items', async () => {
    const resp = await request(app).get('/api/v1/magicC');
    expect(resp.status).toBe(200);
    expect(resp.body[0]).toMatchInlineSnapshot(`
      Object {
        "chance": "01-15",
        "dieValue": 1,
        "id": "1",
        "item": "Potion of Superior Healing",
      }
    `);
  });

  it('GET magicD should return list of magic table D items', async () => {
    const resp = await request(app).get('/api/v1/magicD');
    expect(resp.status).toBe(200);
    expect(resp.body[0]).toMatchInlineSnapshot(`
      Object {
        "chance": "01-20",
        "dieValue": 1,
        "id": "1",
        "item": "Potion of Supreme Healing",
      }
    `);
  });

  it('GET magicE should return list of magic table E items', async () => {
    const resp = await request(app).get('/api/v1/magicE');
    expect(resp.status).toBe(200);
    expect(resp.body[0]).toMatchInlineSnapshot(`
      Object {
        "chance": "01-30",
        "dieValue": 1,
        "id": "1",
        "item": "Spell Scroll (8th Level)",
      }
    `);
  });

  it('GET magicF should return list of magic table F items', async () => {
    const resp = await request(app).get('/api/v1/magicF');
    expect(resp.status).toBe(200);
    expect(resp.body[0]).toMatchInlineSnapshot(`
      Object {
        "chance": "01-15",
        "dieValue": 1,
        "id": "1",
        "item": "Weapon, +1",
      }
    `);
  });

  it('GET magicG should return list of magic table G items', async () => {
    const resp = await request(app).get('/api/v1/magicG');
    expect(resp.status).toBe(200);
    expect(resp.body[0]).toMatchInlineSnapshot(`
      Object {
        "chance": "01-11",
        "dieValue": 1,
        "id": "1",
        "item": "Weapon, +2",
      }
    `);
  });

  it('GET magicH should return list of magic table H items', async () => {
    const resp = await request(app).get('/api/v1/magicH');
    expect(resp.status).toBe(200);
    expect(resp.body[0]).toMatchInlineSnapshot(`
      Object {
        "chance": "01-10",
        "dieValue": 1,
        "id": "1",
        "item": "Weapon, +3",
      }
    `);
  });

  it('GET magicI should return list of magic table I items', async () => {
    const resp = await request(app).get('/api/v1/magicI');
    expect(resp.status).toBe(200);
    expect(resp.body[0]).toMatchInlineSnapshot(`
      Object {
        "chance": "01-05",
        "dieValue": 1,
        "id": "1",
        "item": "Defender",
      }
    `);
  });

  it('GET magicA/2 should return 2nd item of magic table A', async () => {
    const resp = await request(app).get('/api/v1/magicA/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "chance": "51-60",
        "dieValue": 2,
        "id": "2",
        "item": "Spell Scroll (Cantrip)",
      }
    `);
  });

  it('GET magicB/3 should return 3rd item of magic table B', async () => {
    const resp = await request(app).get('/api/v1/magicB/3');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "chance": "23-29",
        "dieValue": 3,
        "id": "3",
        "item": "Potion of Resistance",
      }
    `);
  });

  it('GET magicC/4 should return 4th item of Magic table C', async () => {
    const resp = await request(app).get('/api/v1/magicC/4');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "chance": "28-32",
        "dieValue": 4,
        "id": "4",
        "item": "Potion of Clairvoyance",
      }
    `);
  });

  it('GET magicD/5 should return 5th item of Magic table D', async () => {
    const resp = await request(app).get('/api/v1/magicD/5');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "chance": "51-57",
        "dieValue": 5,
        "id": "5",
        "item": "Spell Scroll (7th Level)",
      }
    `);
  });

  it('GET magicE/6 should return 6th item of the Magic table E', async () => {
    const resp = await request(app).get('/api/v1/magicE/6');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "chance": "94-98",
        "dieValue": 6,
        "id": "6",
        "item": "Arrow of Slaying",
      }
    `);
  });

  it('GET magicF/7 should return the 7th item of the Magic table F', async () => {
    const resp = await request(app).get('/api/v1/magicF/7');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "chance": "28-29",
        "dieValue": 7,
        "id": "7",
        "item": "Bracers of Archery",
      }
    `);
  });

  it('GET magicG/8 should return the 8th item of the Magic Table G', async () => {
    const resp = await request(app).get('/api/v1/magicG/8');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "chance": "20",
        "dieValue": 8,
        "id": "8",
        "item": "Belt of Dwarvenkind",
      }
    `);
  });

  it('GET magicH/9 should return the 9th item of the Magic Table H', async () => {
    const resp = await request(app).get('/api/v1/magicH/9');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "chance": "25-26",
        "dieValue": 9,
        "id": "9",
        "item": "Robe of Stars",
      }
    `);
  });

  it('GET magicI/10 should return the 10th item of the Magic Table I', async () => {
    const resp = await request(app).get('/api/v1/magicI/10');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "chance": "36-38",
        "dieValue": 10,
        "id": "10",
        "item": "Staff of the Magi",
      }
    `);
  });
});
