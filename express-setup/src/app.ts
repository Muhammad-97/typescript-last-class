import express, {Application, Request, Response} from "express";

const app: Application = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("server is running and we are testing!");
});

app.get("/", (req: Request, res: Response) =>{
    res.send("THIS IS FOR TESTING THE SERVER")
}); 