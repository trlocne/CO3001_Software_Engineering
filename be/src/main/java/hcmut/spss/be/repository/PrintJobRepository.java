package hcmut.spss.be.repository;

import hcmut.spss.be.dtos.response.PrintJobStats;
import hcmut.spss.be.entity.printJob.PrintJob;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface PrintJobRepository extends JpaRepository<PrintJob, Long> {
    List<PrintJob> findAllByStudent_UserId(Long userId);
    @Query("SELECT p FROM PrintJob p WHERE p.student.userId = :userId AND FUNCTION('MONTH', p.jobStartTime) = :month")
    List<PrintJob> findAllByStudent_UserIdAndJobStartTimeMonth(@Param("userId") Long userId, @Param("month") int month);

    @Query(value = "SELECT p FROM PrintJob p WHERE YEARWEEK(p.jobStartTime, 1) = YEARWEEK(CURDATE(), 1)")
    List<PrintJob> findAllPrintJobsThisWeek();


    @Query("SELECT new hcmut.spss.be.dtos.response.PrintJobStats(DAYOFWEEK(p.jobStartTime), SUM(p.numberPagePrint), COUNT(*)) " +
            "FROM PrintJob p " +
            "WHERE p.jobStartTime >= :startOfWeek AND p.jobStartTime < :endOfWeek " +
            "GROUP BY DAYOFWEEK(p.jobStartTime)")
    List<PrintJobStats> countPrintJobsPerDayInWeek(@Param("startOfWeek") LocalDateTime startOfWeek,
                                                   @Param("endOfWeek") LocalDateTime endOfWeek);

    @Query(value = "SELECT SUM(number_page_print) FROM print_job " +
            "WHERE job_start_time >= :startOfDay AND job_start_time < :endOfDay", nativeQuery = true)
    Integer countPrintPageInDay(@Param("startOfDay") String startOfDay, @Param("endOfDay") String endOfDay);

    @Query(value = "SELECT DATE(job_start_time) AS print_date, SUM(number_page_print) AS total_pages " +
            "FROM print_job " +
            "GROUP BY DATE(job_start_time) " +
            "ORDER BY print_date ASC", nativeQuery = true)
    List<Object[]> countPrintPagesByDay();

    @Query(value = "SELECT DATE(job_start_time) AS print_date, SUM(number_page_print) AS total_pages, COUNT(*) AS total_print " +
            "FROM print_job " +
            "GROUP BY DATE(job_start_time) " +
            "ORDER BY print_date ASC", nativeQuery = true)
    List<Object[]> countPrintJobByDay();
}
