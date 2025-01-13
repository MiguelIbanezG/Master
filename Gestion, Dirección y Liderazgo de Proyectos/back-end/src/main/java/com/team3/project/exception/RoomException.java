package com.team3.project.exception;

/**
 * Custom exception class for handling room-related errors.
 * This class extends the RuntimeException class and provides
 * constructors for creating exceptions with default or custom messages.
 */
public class RoomException extends RuntimeException {

    /**
     * Default constructor that creates a RoomException with a default message.
     * The default message is "Room not found".
     */
    public RoomException() {
        super("Room not found");
    }

    /**
     * Constructor that creates a RoomException with a custom message.
     * @param message The custom message for the exception.
     */
    public RoomException(final String message) {
        super(message);
    }
}
