package com.team3.project.utils;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;

/**
 * Utility class providing various helper methods for date and time operations.
 */
public final class Utils {
    /**
     * Default security temperature value used for safety checks.
     * This value is set to 70 degrees.
     */
    private static final BigDecimal SECURITY_TEMPERATURE = new BigDecimal("70");


    // Private constructor to prevent instantiation
    private Utils() {
        throw new UnsupportedOperationException("Utility class");
    }

    /**
     * Checks if the given temperature is safe.
     *
     * @param temperature the temperature to be checked
     * @return true if the temperature is
     * below the security temperature, false otherwise
     */
    public static boolean isTemperatureSafe(final BigDecimal temperature) {
        return temperature.compareTo(SECURITY_TEMPERATURE) < 0;
    }

    /**
     * Converts a date-time string to a LocalDateTime object.
     *
     * @param dateTimeString the date-time string to be converted
     * @return the corresponding LocalDateTime object
     */
    public static LocalDateTime convertToLocalDateTime(
            final String dateTimeString) {
        // Trim any trailing spaces
        String dateTimeString2 = dateTimeString.trim();

        // Define the format without the colon in the time zone
        DateTimeFormatter formatter = DateTimeFormatter
                .ofPattern("yyyy-MM-dd'T'HH:mm:ssXX");

        // Parse the string to an OffsetDateTime
        OffsetDateTime offsetDateTime = OffsetDateTime.parse(dateTimeString2,
                formatter);

        // Convert the OffsetDateTime to LocalDateTime
        return offsetDateTime.toLocalDateTime();
    }

    /**
     * Converts a LocalDateTime object to a date-time string.
     *
     * @param localDateTime the LocalDateTime object to be converted
     * @return the corresponding date-time string
     */
    public static String convertToLocalDateTimeString(
            final LocalDateTime localDateTime) {
        DateTimeFormatter formatter = DateTimeFormatter
                .ofPattern("yyyy-MM-dd'T'HH:mm:ss");
        return localDateTime.format(formatter);
    }
}
