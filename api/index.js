import fs from 'fs';
import path from 'path';

export default (req, res) => {
    const filePath = path.join(process.cwd(), 'index.html');  // เส้นทางไปยัง index.html
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    });
};