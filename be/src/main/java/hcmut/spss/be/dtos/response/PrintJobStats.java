package hcmut.spss.be.dtos.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PrintJobStats {
    private int dayOfWeek; // 1 = Chủ Nhật, 7 = Thứ Bảy
    private long totalPagesPrinted;
    private long totalPrintings;

//    // Constructor, getters và setters
//
//    public PrintJobStats(int dayOfWeek, long totalPagesPrinted, long totalPrintings) {
//        this.dayOfWeek = dayOfWeek;
//        this.totalPagesPrinted = totalPagesPrinted;
//    }
//
//    public int getDayOfWeek() {
//        return dayOfWeek;
//    }
//
//    public void setDayOfWeek(int dayOfWeek) {
//        this.dayOfWeek = dayOfWeek;
//    }
//
//    public long getTotalPagesPrinted() {
//        return totalPagesPrinted;
//    }
//
//    public void setTotalPagesPrinted(long totalPagesPrinted) {
//        this.totalPagesPrinted = totalPagesPrinted;
//    }
}
