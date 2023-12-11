import { Router } from "express";

export const index = Router();

index.get("/", () => async (req: Request, res: Response): Promise<void> => {
    res.send();
});
