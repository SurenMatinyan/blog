import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

export const CreateFileInterceptor = (field: string) => {
    return FileInterceptor(field, {
      storage: diskStorage({
        destination: "./assets",
        filename: (req: any, file: any, cb: any) => {
          cb(null, file ? `${Date.now()}-${file.originalname}` : null);
        },
      }),
    });
  };