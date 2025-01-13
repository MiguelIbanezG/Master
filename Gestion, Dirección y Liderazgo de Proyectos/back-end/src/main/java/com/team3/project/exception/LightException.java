package com.team3.project.exception;

/**
 * Custom exception class for handling light-related errors.
 * This class extends the RuntimeException class and provides
 * constructors for creating exceptions with default or custom messages.
 */
public class LightException extends RuntimeException {

    /**
     * Default constructor that creates a LightException with a default message.
     * The default message is "Light not found".
     */
    public LightException() {
        super("Light not found");
    }

    /**
     * Constructor that creates a LightException with a custom message.
     * @param message The custom message for the exception.
     */
    public LightException(final String message) {
        super(message);
    }
}
