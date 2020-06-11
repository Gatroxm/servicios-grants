import {Router, Request, Response} from 'express';
import MySql from '../mysqul/mysql';

const router = Router();

router.get('/grants', (req: Request, res: Response) => {

    const query = `
    SELECT * 
    FROM grants 
    LIMIT 1000`;

    MySql.ejecutarQuery(query, (err:any, grants: Object[]) => {
        if( err ){
            res.status(400).json({
                ok : false,
                error: err
            });
        } else {
            res.json({
                ok: true,
                grants
            })
        }
    });

});
router.get('/grants/:id', (req: Request, res: Response) => {

    const id = req.params.id;
    const query = 'SELECT * FROM grants WHERE `OPPORTUNITY_NUMBER` = "' + id +'"';

    MySql.ejecutarQuery(query, (err:any, grant: Object[]) => {
        if( err ){
            res.status(400).json({
                ok : false,
                error: err
            });
        } else {
            res.json({
                ok: true,
                grant: grant[0]
            })
        }
    });

});

export default router;