// file có đuôi .d.ts sử dụng từ khóa declare để định nghĩa kiểu dữ liệu và ko cần import khi sử dụng

declare type ApiResponse<T> = {
  statusCode: number;
  message: string;
  content: T;
};
