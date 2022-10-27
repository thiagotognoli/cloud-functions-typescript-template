import * as functions from '@google-cloud/functions-framework';

// export function helloWorld(_: functions.Request, res: functions.Response) {
//     try {
//         res.status(200)
//         res.send('Hello World')
//     } catch (err) {
//         res.status(500)
//         res.send(err)
//     }
// }


functions.http('helloWorld', (req: functions.Request, res: functions.Response) => {
    res.status(200).send(`Hello World!`);
});
