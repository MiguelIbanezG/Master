package com.team3.project.utils;

import com.team3.project.enumeration.Code;

import lombok.Data;

/**
 * A generic class to encapsulate the result of an operation.
 *
 * @param <T> the type of the data contained in the result
 */
@Data
public class Result<T> {
    /**
     * The data contained in the result.
     */
    private T data;

    /**
     * The message associated with the result.
     */
    private String msg;

    /**
     * The code representing the status of the result.
     */
    private Code code;

    /**
     * Creates a success result with no data.
     *
     * @param <T> the type of the data
     * @return a success result
     */
    public static <T> Result<T> success() {
        Result<T> result = new Result<>();
        result.code = Code.SUCCESS;
        return result;
    }

    /**
     * Creates a success result with the specified data.
     *
     * @param <T> the type of the data
     * @param data the data to be included in the result
     * @return a success result containing the specified data
     */
    public static <T> Result<T> success(final T data) {
        Result<T> result = new Result<>();
        result.code = Code.SUCCESS;
        result.data = data;
        return result;
    }

    /**
     * Creates a success result with the specified data and message.
     *
     * @param <T> the type of the data
     * @param data the data to be included in the result
     * @param msg the message to be included in the result
     * @return a success result containing the specified data and message
     */
    public static <T> Result<T> success(final T data, final String msg) {
        Result<T> result = new Result<>();
        result.code = Code.SUCCESS;
        result.data = data;
        result.msg = msg;
        return result;
    }

    /**
     * Creates a failure result with the specified message.
     *
     * @param <T> the type of the data
     * @param msg the message to be included in the result
     * @return a failure result containing the specified message
     */
    public static <T> Result<T> fail(final String msg) {
        Result<T> result = new Result<>();
        result.code = Code.FAIL;
        result.msg = msg;
        return result;
    }
}
