import express, {Response, Request} from 'express';
var router = express.Router();

/* GET home page. */
router.get('/landing', function(req: Request, res: Response, next) {
  console.log('A request was made.');
  res.json({title: "Hello to me and my thing", subtitle:"This is the greatest thing."});
});

module.exports = router;
