package com.team3.project.enumeration;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * Enumeration representing different codes.
 */
@Getter
@AllArgsConstructor
public enum Code {
    /**
     * Represents a failure code with value 0.
     */
    FAIL(0),

    /**
     * Represents a success code with value 1.
     */
    SUCCESS(1);

    /**
     * The integer value of the code.
     */
    private final int state;
}
