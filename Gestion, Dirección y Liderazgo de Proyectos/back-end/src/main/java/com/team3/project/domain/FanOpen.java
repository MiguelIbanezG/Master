package com.team3.project.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDateTime;

/**
 * Entity representing the open state of a fan.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@DynamicUpdate
@Builder
@Entity
@Table(name = "fan_open")
public class FanOpen {
    /**
     * The unique identifier of the fan open state.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Integer id;

    /**
     * The ID of the fan associated with this open state.
     */
    private Integer fanId;

    /**
     * The timestamp when the fan state was recorded.
     */
    private LocalDateTime timeStamp;

    /**
     * The open state of the fan. Defaults to false.
     */
    @Builder.Default
    private boolean isOpen = false;

    /**
     * The fan entity associated with this open state.
     */
    @JsonIgnore
    @ToString.Exclude
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fanId", insertable = false, updatable = false)
    private Fan fan;
}
