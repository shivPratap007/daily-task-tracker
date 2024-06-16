import { configDotenv } from "dotenv";
configDotenv();

export const config={
    server_port:process.env.SERVER_PORT,
}

Object.freeze(config);