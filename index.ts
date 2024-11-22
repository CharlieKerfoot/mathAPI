import express, { Request, Response } from 'express';
import crypto from 'crypto'

const app = express();

app.use(express.json());

const checkReq = (req: Request, res: Response): number[] | undefined => {
    //checkAuth
	if (!req.headers.authorization) {
		res.status(401).json({ message: 'Authentication Required' });
		return undefined;
	} 
    const input = crypto.createHash('sha256').update(req.headers.authorization).digest("hex");
	const pass = "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4"; //1234
    if (input != pass) {
		res.status(403).json({ message: 'Unauthorized' });
		return undefined;
	}
    //checkArray
    if (!req.body.array) {
		res.status(404).json({ message: 'Array not found' });
		return undefined;
	}
	return req.body.array;
};

app.get('/add', (req, res) => {
    const array = checkReq(req, res);
	if (array) res.json(array.reduce((sum, curr) => sum + curr, 0));
});

app.get('/product', (req, res) => {
	const array = checkReq(req, res);
	if (array) res.json(array.reduce((sum, curr) => sum * curr, 1));
});

app.get('/evens', (req, res) => {
	const array = checkReq(req, res);
	if (array) res.json(array.filter((num) => num % 2 == 0));
});

app.get('/min', (req, res) => {
	const array = checkReq(req, res);
	if (array) res.json(Math.min(...array));
});

app.get('/max', (req, res) => {
	const array = checkReq(req, res);
	if (array) res.json(Math.max(...array));
});

app.get('/sort', (req, res) => {
	const array = checkReq(req, res);
	if (array) res.json(array.sort((a, b) => req.body.ascending == false ? b - a : a-b));
});

app.get('/target', (req, res) => {
	const array = checkReq(req, res);
	if (!array) return;
	if (parseInt(req.body.target)) {
		const target = req.body.target;
		array.sort((a,b) => a-b);
		let i = 0;
		let j = array.length - 1;
		while (i < j) {
			if (array[i] + array[j] == target) res.json([array[i], array[j]]);
			else if (array[i] + array[j] > target) j--;
			else i++;
		}
		res.json({ message: 'No two numbers equal target' });
	} else {
		res.status(404).json({ message: 'Target not found' });
	}
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});
