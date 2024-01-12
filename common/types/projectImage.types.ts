import { AxiosResponse } from "axios";
import { Theme } from "common/providers";
import { StaticImageData } from "next/image";

export type ProjectImageType =
  | StaticImageData
  | ((theme?: Theme) => Promise<AxiosResponse<any, any>>);
