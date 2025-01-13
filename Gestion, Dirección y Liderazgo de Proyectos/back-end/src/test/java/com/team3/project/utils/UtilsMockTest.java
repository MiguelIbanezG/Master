package com.team3.project.utils;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

import static org.junit.jupiter.api.Assertions.assertThrows;

@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
@SpringBootTest
class UtilsMockTest {

    @Test
    void constructor_ThrowsUnsupportedOperationException() {
        assertThrows(InvocationTargetException.class, () -> {
            Constructor<Utils> constructor = Utils.class.getDeclaredConstructor();
            constructor.setAccessible(true);
            constructor.newInstance();
        });
    }
}
