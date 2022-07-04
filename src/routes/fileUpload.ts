import { Request, Response, Application, NextFunction } from 'express';
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  }
})

const upload = multer({ storage })

const uploadFile = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json('file has been uploaded')
  next()
}

const UploadRouter = (app: Application) => {
  app.post('/api/v1/upload', upload.single('file'), uploadFile)
}

export default UploadRouter