import { NextApiResponse, NextApiRequest } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    { id: 0, name: 'Pedro' },
    { id: 1, name: 'Paulo' },
    { id: 2, name: 'Brasca' },
    { id: 3, name: 'Trevisanuto' },
  ];

  return res.json(users);
};
