import fs from 'fs';
import path from 'path';

export default (req, res) => {
    const filePath = path.join(process.cwd(), 'project_1.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    });
};
