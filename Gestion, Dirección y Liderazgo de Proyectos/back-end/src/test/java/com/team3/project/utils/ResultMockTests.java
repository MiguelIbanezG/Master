package com.team3.project.utils;

import com.team3.project.enumeration.Code;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
@SpringBootTest
class ResultMockTests {
    @Test
    void successWithoutData_ReturnsSuccessResult() {
        Result<String> result = Result.success();
        assertEquals(Code.SUCCESS, result.getCode());
        assertNull(result.getData());
    }

    @Test
    void successWithData_ReturnsSuccessResultWithData() {
        String data = "Test Data";
        Result<String> result = Result.success(data);
        assertEquals(Code.SUCCESS, result.getCode());
        assertEquals(data, result.getData());
    }

    @Test
    void successWithDataAndMessage_ReturnsSuccessResultWithDataAndMessage() {
        String data = "Test Data";
        String message = "Success Message";
        Result<String> result = Result.success(data, message);
        assertEquals(Code.SUCCESS, result.getCode());
        assertEquals(data, result.getData());
        assertEquals(message, result.getMsg());
    }

    @Test
    void failWithMessage_ReturnsFailureResultWithMessage() {
        String message = "Failure Message";
        Result<String> result = Result.fail(message);
        assertEquals(Code.FAIL, result.getCode());
        assertEquals(message, result.getMsg());
    }
}
