import type { NextApiRequest, NextApiResponse } from "next";

export type NextApi = {
    req: NextApiRequest,
    res: NextApiResponse
}

class BaseController {
    constructor() {
        this.index = this.index.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    public async index(next: NextApi) {
        this.createLog(next)
        return next.res.status(405).json({
            message: `Method ${next.req.method} Not Allowed`
        })
    }

    public async show(next: NextApi) {
        this.createLog(next)
        return next.res.status(405).json({
            message: `Method ${next.req.method} Not Allowed`
        })
    }

    public async create(next: NextApi) {
        this.createLog(next)
        return next.res.status(405).json({
            message: `Method ${next.req.method} Not Allowed`
        })
    }

    public async update(next: NextApi) {
        this.createLog(next)
        return next.res.status(405).json({
            message: `Method ${next.req.method} Not Allowed`
        })
    }

    public async delete(next: NextApi) {
        this.createLog(next)
        return next.res.status(405).json({
            message: `Method ${next.req.method} Not Allowed`
        })
    }

    protected async createLog(next: NextApi) {
        console.info(next)
    }

    public static async handleRequest(req: NextApiRequest, res: NextApiResponse) {
        const controller = new this();
        const nextApi = {
            req, res
        }
        switch (req.method) {
            case "GET":
                return controller.index(nextApi);
            case "POST":
                return controller.create(nextApi);
            case "PUT":
                return controller.update(nextApi);
            case "PATCH":
                return controller.update(nextApi);
            case "DELETE":
                return controller.delete(nextApi);
            default:
                return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    }
}

export default BaseController