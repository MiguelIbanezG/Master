package com.team3.project.config;

import com.team3.project.utils.Result;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
@SpringBootTest
class GlobalExceptionConfigMockTest {
    @InjectMocks
    private GlobalExceptionConfig globalExceptionConfig;

    @Mock
    private RuntimeException runtimeException;

    @Mock
    private Exception exception;

    @BeforeEach
    void setUp() {
        when(runtimeException.getMessage()).thenReturn("Runtime exception occurred");
        when(exception.getMessage()).thenReturn("General exception occurred");
    }

    @Test
    void handleRuntimeException_ReturnsFailureResult() {
        Result<String> result = globalExceptionConfig.handleRuntimeException(runtimeException);
        assertEquals("Runtime exception occurred", result.getMsg());
        assertEquals("FAIL", result.getCode().toString());
    }

    @Test
    void handleGlobalException_ReturnsFailureResult() {
        Result<String> result = globalExceptionConfig.handleGlobalException(exception);
        assertEquals("General exception occurred", result.getMsg());
        assertEquals("FAIL", result.getCode().toString());
    }
}
