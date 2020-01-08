const request = require('supertest')
const db = require('./songs-model')
const server = require('../server')

describe('songs router', () => {
    it('GET /favoritesongs returns a 200', async () => {
        let resStatus = await request(server)
            .get('/api/music/:id/faves')
            .then(res => res.status)
        expect(resStatus).toEqual(200)
    })

    it("should be defined", async () => {
        const res = await request(server)
          .get("/api/music/1")
        expect(res).toBeDefined();
    });
});