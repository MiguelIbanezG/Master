package com.team3.project.exception;

/**
 * Custom exception class for handling fan-related errors.
 * This class extends the RuntimeException class and provides
 * constructors for creating exceptions with default or custom messages.
 */
public class FanException extends RuntimeException {

    /**
     * Default constructor that creates a FanException with a default message.
     * The default message is "Fan not found".
     */
    public FanException() {
        super("Fan not found");
    }

    /**
     * Constructor that creates a FanException with a custom message.
     * @param message The custom message for the exception.
     */
    public FanException(final String message) {
        super(message);
    }
}
