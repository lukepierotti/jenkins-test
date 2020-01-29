import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path'


const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, '../jenkins-test-repo')));


app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../jenkins-test-repo/index.html'));
})

const server = app.listen('4000', '0.0.0.0', () => {
    console.info(`Server started on port 4000`);
  });
  