import functions from 'firebase-functions';

const sync = async (req: functions.Request, res: functions.Response): Promise<void> => {
  // eslint-disable-next-line no-console
  console.log('req.body', req.body);

  res.status(200).send({
    success: true,
  });
};

export default sync;
