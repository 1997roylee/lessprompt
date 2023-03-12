


import AppsController from "controllers/AppsController";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    return AppsController.handleRequest(req, res);
}