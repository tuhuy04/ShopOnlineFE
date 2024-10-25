export interface ResponseData {
  success: boolean;
  status?: number;
  error?: string;
  data?: any;
  message?: string;
  token?: string
}