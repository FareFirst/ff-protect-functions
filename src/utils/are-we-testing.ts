const areWeTesting = (): boolean => process.env.JEST_WORKER_ID !== undefined;

export default areWeTesting;
