import { AxiosResponse } from "axios";
import { StaticImageData } from "next/image";

export type ProjectImageType =
  | StaticImageData
  | (() => Promise<AxiosResponse<any, any>>);
