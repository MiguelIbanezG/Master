package com.team3.project.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.team3.project.utils.Result;

/**
 * GlobalExceptionConfig is a configuration class that handles exceptions
 * globally across the
 * application. It uses Spring's @RestControllerAdvice to provide centralized
 * exception handling.
 */
@RestControllerAdvice
@Slf4j
public class GlobalExceptionConfig {

    /**
     * Handles RuntimeExceptions thrown in the application.
     *
     * @param exception the RuntimeException that was thrown
     * @return a Result object containing the failure message
     */
    @ExceptionHandler({ RuntimeException.class })
    public Result<String> handleRuntimeException(
            final RuntimeException exception) {
        log.atError().log(exception.getMessage());
        return Result.fail(exception.getMessage());
    }

    /**
     * Handles all other exceptions thrown in the application.
     *
     * @param exception the Exception that was thrown
     * @return a Result object containing the failure message
     */
    @ExceptionHandler({ Exception.class })
    public Result<String> handleGlobalException(final Exception exception) {
        log.atError().log(exception.getMessage());
        return Result.fail(exception.getMessage());
    }
}
