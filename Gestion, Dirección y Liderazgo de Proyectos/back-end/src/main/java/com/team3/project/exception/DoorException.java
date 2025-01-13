package com.team3.project.exception;

/**
 * Custom exception class for handling door-related errors.
 * This class extends the RuntimeException class and provides
 * constructors for creating exceptions with default or custom messages.
 */
public class DoorException extends RuntimeException {

    /**
     * Constructor that creates a DoorException with a custom message.
     * @param message The custom message for the exception.
     */
    public DoorException(final String message) {
        super(message);
    }
}
