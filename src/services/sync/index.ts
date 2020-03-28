import functions from 'firebase-functions';
import currentUser, { AuthError } from '../auth';

const sync = async (req: functions.Request, res: functions.Response): Promise<void> => {
  try {
    const user = await currentUser(req);
    await processUserSync(user, req.body);

    res.json({
      success: true,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    if (error instanceof AuthError) {
      res.status(401).json({
        message: error.message,
        code: error.code,
      });
      return;
    }

    res.status(400).json({
      message: 'Failed to process the request',
    });
  }

  res.status(200).send({
    success: true,
  });
};

export default sync;
