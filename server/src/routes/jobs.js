import { Router } from 'express';
import Table from '../table';

let router = Router();
let jobTable = new Table('FreeLance');

router.get('/', async (req, res) => {
    console.log(req.user);
    try {
        let jobs = await jobTable.getAll()
        res.json(job);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    try {
        // idObj will look like { id: 7 }
        let idObj = await jobTable.insert({
            name: req.body.name,
            description: req.body.description
        });
        res.status(201).json(idObj);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let foundJob = await jobTable.getOne(req.params.id);
        res.json(foundJob);
        console.log(foundJob);
        console.log('in the router');
    } catch (err) {
        console.log(err);
        console.log('didnt work');
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res) => {
    try {
        // not concerned about getting a value back, just waiting on update to finish
        await jobTable.update(req.params.id, req.body);
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        // not concerned about getting a value back, just waiting on delete to finish
        await jobTable.delete(req.params.id);
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default router;