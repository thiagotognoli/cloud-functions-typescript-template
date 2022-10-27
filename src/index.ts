import * as functions from '@google-cloud/functions-framework';
import { Request, Response } from '@google-cloud/functions-framework';


// export function helloWorld(_: Request, res: Response) {
//     try {
//         res.status(200)
//         res.send('Hello World')
//     } catch (err) {
//         res.status(500)
//         res.send(err)
//     }
// }


functions.http('helloWorld', (req: Request, res: Response) => {
    res.status(200).send(`Hello World!`);
});
