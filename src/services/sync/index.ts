import functions from 'firebase-functions';

const sleep = (): Promise<void> => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

const sync = async (req: functions.Request, res: functions.Response): Promise<void> => {
  // eslint-disable-next-line no-console
  console.log('req.body', req.body);

  await sleep();

  // eslint-disable-next-line no-console
  console.log('Slept for some time', req.body);

  res.status(200).send({
    success: true,
  });
};

export default sync;
