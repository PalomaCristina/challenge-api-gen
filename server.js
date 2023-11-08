import 'dotenv/config'
import app from "./src/app.js";

const HOST = process.env.HOST;
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
