import multer from "multer";
import path from "path";
import crypto from "crypto";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.resolve(__dirname, "..", "..", "uploads"));
  },
  filename: function (request, file, callback) {
    const hash = crypto.randomBytes(6).toString("hex");

    const fileName = `${hash}-${file.originalname}`;

    callback(null, fileName);
  },
});

export default storage;
