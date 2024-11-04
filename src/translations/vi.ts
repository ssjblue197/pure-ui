import { registerTranslation } from "pure-localize";
import type { Translation } from "../utilities/localize.js";

const translation: Translation = {
  $code: "vi",
  $name: "Tiếng Việt",
  $dir: "ltr",

  carousel: "Băng chuyền",
  clearEntry: "Xóa mục nhập",
  close: "Đóng",
  copied: "Đã sao chép",
  copy: "Sao chép",
  currentValue: "Giá trị hiện tại",
  error: "Lỗi",
  goToSlide: (slide, count) => `Chuyển đến trang ${slide} trong ${count}`,
  hidePassword: "Ẩn mật khẩu",
  loading: "Đang tải",
  nextPage: "Trang sau",
  nextMonth: "Tháng sau",
  nextYear: "Năm sau",
  nextSlide: "Trang tiếp theo",
  numOptionsSelected: num => {
    if (num === 0) return "Không có lựa chọn nào";
    if (num === 1) return "1 lựa chọn đã được chọn";
    return `${num} lựa chọn đã được chọn`;
  },
  previousPage: "Trang trước",
  previousMonth: "Tháng trước",
  previousYear: "Năm trước",
  previousSlide: "Trang trước",
  progress: "Tiến độ",
  remove: "Xóa",
  resize: "Thay đổi kích thước",
  scrollToEnd: "Cuộn đến cuối",
  scrollToStart: "Cuộn đến đầu",
  selectAColorFromTheScreen: "Chọn một màu từ màn hình",
  showPassword: "Hiện mật khẩu",
  slideNum: slide => `Trang ${slide}`,
  toggleColorFormat: "Chuyển đổi định dạng màu",
  today: "Hôm nay",
};

registerTranslation(translation);

export default translation;
