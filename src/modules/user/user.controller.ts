// import { HttpStatus } from "http-status";
import httpStatus from "http-status"
import { userService } from "./user.service";
import { Request, Response } from "express";

const registerUser = async (req: Request, res: Response) => {
    try {
        const payload = req.body;

        const user = await userService.registerUserIntoDB(payload);
        res.status(httpStatus.CREATED).json({
            success: true,
            statusCode: httpStatus.CREATED,
            message: "User registerd successfully",
            data: {
                user
            }
        });
    } catch (error) {
        console.log(error);

        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            message: "Failed to register user",
            error: (error as Error).message
        })
    }
}

export const userController = {
    registerUser
}