

import { NextFunction, Request, Response } from "express";
import { Role } from "../../generated/prisma/enums"
import { catchAsync } from "../utils/catchAsync";

declare global {
    namespace Express {
        interface Request {
            user?: {
                email: string;
                name: string;
                id: string;
                role: string;
            }
        }
    }
}


// auth(Role.ADMIN, Role.USER, Role.Author)
// auth() => ... requiredRoles => [Role.ADMIN, Role.USER, Role.AUTHOR]

export const auth = (...requiredRoles: Role[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const token = req.cookies.accessToken ?
            req.cookies.accessToken : req.headers.authorization?.startsWith("Bearer") ?
                req.headers.authorization?.split(" ")[1]
                : req.headers.authorization;

                
    })
}