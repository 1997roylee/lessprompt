import BaseController from './BaseController';
import { prisma } from "database";
import type { NextApi } from './BaseController';
import { CreateAppSchema } from 'schemas/CreateAppSchema';

export default class AppsController extends BaseController {
    public async index({ res }: NextApi) {
        const apps = await prisma.app.findMany();
        return res.status(200).json({
            apps
        }) 
    }

    public async create({ req, res }: NextApi) {
        try {
            const { name, description, command, example, userId, avatar, isAPI } = req.body;
            await CreateAppSchema.validate({
                name, description, command, example, userId, avatar, isAPI
            })
            const app = await prisma.app.create({
                data: {
                    name, description, command, example, userId, avatar, isAPI
                }
            });
            return res.status(201).json({
                app
            });
        } catch (error) {
            console.warn(error);
            return res.status(422).json({
                message: error.message
            })
        }
    }
}