package hcmut.spss.be.service.impl;

import hcmut.spss.be.dtos.response.PrintJobStats;
import hcmut.spss.be.dtos.response.RevenueResponse;
import hcmut.spss.be.dtos.response.StatisticResponse;
import hcmut.spss.be.repository.PaymentRepository;
import hcmut.spss.be.repository.PrintJobRepository;
import hcmut.spss.be.repository.UserVisitRepository;
import hcmut.spss.be.service.StatisticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.TemporalAdjusters;
import java.util.*;

@Service
public class StatisticResponseImpl implements StatisticService {
    @Autowired
    private UserVisitRepository visitRepository;

    @Autowired
    private PrintJobRepository printJobRepository;

    @Autowired
    private PaymentRepository printRepository;
    @Autowired
    private PaymentRepository paymentRepository;

    @Override
    public StatisticResponse getStatistic() {

        //access
        LocalDate date = LocalDate.now(); // Ngày cụ thể
        String startOfDay = date.atStartOfDay().toString(); // 00:00:00
        String endOfDay = date.plusDays(1).atStartOfDay().toString(); // 00:00:00 ngày tiếp theo
        String yesterday = date.minusDays(1).atStartOfDay().toString();
        Map<String, Integer> visitCounts = new HashMap<>();
        visitCounts.put("today", visitRepository.countVisitsInDay(startOfDay, endOfDay));
        visitCounts.put("yesterday", visitRepository.countVisitsInDay(yesterday, startOfDay));

        // printing
        LocalDateTime startOfWeek = getStartOfWeek();
        LocalDateTime endOfWeek = getEndOfWeek();
        List<PrintJobStats> stats = printJobRepository.countPrintJobsPerDayInWeek(startOfWeek, endOfWeek);

        // Tạo danh sách chứa các ngày trong tuần (từ Chủ Nhật đến Thứ Bảy)
        List<PrintJobStats> completeStats = new ArrayList<>();

        // Tạo danh sách các ngày trong tuần, Chủ Nhật là 1 và Thứ Bảy là 7
        for (int day = 1; day <= 7; day++) {
            // Kiểm tra xem có dữ liệu cho ngày này không
            int finalDay = day;
            Optional<PrintJobStats> stat = stats.stream()
                    .filter(s -> s.getDayOfWeek() == finalDay)
                    .findFirst();

            // Nếu có dữ liệu cho ngày này, thêm vào completeStats
            if (stat.isPresent()) {
                completeStats.add(stat.get());
            } else {
                // Nếu không có dữ liệu, thêm một đối tượng PrintJobStats với totalPagesPrinted = 0
                completeStats.add(new PrintJobStats(day, 0,0));
            }
        }

        // printed
        Map<String, Integer> pagePrinted  = new HashMap<>();
        pagePrinted.put("today", printJobRepository.countPrintPageInDay(startOfDay, endOfDay)==null ? 0 : printJobRepository.countPrintPageInDay(startOfDay, endOfDay));
        pagePrinted.put("yesterday", printJobRepository.countPrintPageInDay(yesterday, startOfDay) == null? 0: printJobRepository.countPrintPageInDay(yesterday, startOfDay) );

        // buy page
        Map<String, Integer> pageSold = new HashMap<>();
        pageSold.put("today", paymentRepository.countPapersInDay(startOfDay, endOfDay)==null ? 0 : paymentRepository.countPapersInDay(startOfDay, endOfDay));
        pageSold.put("yesterday", paymentRepository.countPapersInDay(yesterday, startOfDay)==null? 0:paymentRepository.countPapersInDay(yesterday, startOfDay) );

        // revenue
        List<RevenueResponse> revenueResponses = new ArrayList<>();
        List<Object[]> revenueslist = paymentRepository.countTotalAmountLast6Months();

        // Lấy 6 tháng gần nhất
        List<LocalDate> last6Months = new ArrayList<>();
        LocalDate currentDate = LocalDate.now();
        for (int i = 0; i < 6; i++) {
            last6Months.add(currentDate.minusMonths(i).withDayOfMonth(1)); // Lấy tháng đầu tiên của mỗi tháng
        }

        // Duyệt qua dữ liệu trả về từ cơ sở dữ liệu
        for (Object[] row : revenueslist) {
            int month = (Integer) row[0];
            int year = (Integer) row[1];
            double totalAmount = (Double) row[2];

            // Tạo đối tượng RevenueResponse cho mỗi tháng có dữ liệu
            revenueResponses.add(new RevenueResponse(year, month, totalAmount));
        }

        // Duyệt qua tất cả 6 tháng và kiểm tra nếu tháng không có dữ liệu thì gán revenue = 0
        for (LocalDate month : last6Months) {
            int year = month.getYear();
            int monthValue = month.getMonthValue();

            // Kiểm tra xem tháng này đã có trong danh sách dữ liệu chưa
            boolean found = false;
            for (RevenueResponse response : revenueResponses) {
                if (response.getYear() == year && response.getMonth() == monthValue) {
                    found = true;
                    break;
                }
            }

            // Nếu không có, thêm vào danh sách với revenue = 0
            if (!found) {
                revenueResponses.add(new RevenueResponse(year, monthValue, 0.0));
            }
        }

        // Sắp xếp lại theo tháng
        revenueResponses.sort(Comparator.comparingInt(RevenueResponse::getYear)
                .thenComparingInt(RevenueResponse::getMonth));


        return new StatisticResponse(visitCounts, pagePrinted, pageSold, completeStats, revenueResponses);
    }


    public LocalDateTime getStartOfWeek() {
        LocalDateTime now = LocalDateTime.now();
        return now.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY)).toLocalDate().atStartOfDay();
    }

    public LocalDateTime getEndOfWeek() {
        LocalDateTime now = LocalDateTime.now();
        return now.with(TemporalAdjusters.nextOrSame(DayOfWeek.SUNDAY)).toLocalDate().atTime(23, 59, 59, 999999999);
    }
}
