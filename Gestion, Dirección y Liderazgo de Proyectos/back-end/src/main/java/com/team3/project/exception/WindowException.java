package com.team3.project.exception;

/**
 * Custom exception class for handling window-related errors.
 * This class extends the RuntimeException class and provides
 * constructors for creating exceptions with default or custom messages.
 */
public class WindowException extends RuntimeException {

    /**
     * Default constructor that creates a WindowException with a default
     * message.
     * The default message is "Window not found".
     */
    public WindowException() {
        super("Window not found");
    }

    /**
     * Constructor that creates a WindowException with a custom message.
     *
     * @param message The custom message for the exception.
     */
    public WindowException(final String message) {
        super(message);
    }
}
