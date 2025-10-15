import {Course, DurationUnit, PricingLevel} from "@/types/Course";

interface PricingEntry {
    pricePerParticipant: number;
    priceInhouse: number;
}

interface PricingTable {
    [key: string]: PricingEntry; // key format: "{pricingLevel}_{durationInHours}"
}

export class PricingService {
    private static readonly HOURS_PER_DAY = 8;

    // Lookup table for pricing
    // Key format: "{pricingLevel}_{durationInHours}"
    private static readonly pricingTable: PricingTable = {
        // Low pricing
        'Low_2': { pricePerParticipant: 70, priceInhouse: 340 },
        'Low_8': { pricePerParticipant: 590, priceInhouse: 1590 },
        'Low_16': { pricePerParticipant: 1090, priceInhouse: 2990 },
        'Low_24': { pricePerParticipant: 1560, priceInhouse: 4290 },
        'Low_32': { pricePerParticipant: 1860, priceInhouse: 5390 },

        // Medium pricing
        'Medium_2': { pricePerParticipant: 90, priceInhouse: 390 },
        'Medium_8': { pricePerParticipant: 690, priceInhouse: 1890 },
        'Medium_16': { pricePerParticipant: 1290, priceInhouse: 3580 },
        'Medium_24': { pricePerParticipant: 1840, priceInhouse: 5070 },
        'Medium_32': { pricePerParticipant: 2190, priceInhouse: 6360 },

        // High pricing
        'High_2': { pricePerParticipant: 130, priceInhouse: 590 },
        'High_8': { pricePerParticipant: 860, priceInhouse: 2290 },
        'High_16': { pricePerParticipant: 1590, priceInhouse: 4450 },
        'High_24': { pricePerParticipant: 2290, priceInhouse: 6290 },
        'High_32': { pricePerParticipant: 2690, priceInhouse: 7950 },
    };

    /**
     * Convert duration to hours based on the duration unit
     */
    private static convertToHours(duration: number, unit?: DurationUnit): number {
        if (unit === DurationUnit.Days) {
            return duration * this.HOURS_PER_DAY;
        }
        return duration; // Already in hours
    }

    /**
     * Get the lookup key for the pricing table
     */
    private static getPricingKey(pricingLevel: PricingLevel, durationInHours: number): string {
        return `${pricingLevel}_${durationInHours}`;
    }

    /**
     * Get pricing for a course based on pricing level and duration. Assumes "Medium" if no level is set.
     * Returns null if no pricing is found in the table
     */
    static getPricing(course: Course): PricingEntry | null {
        const durationInHours = this.convertToHours(course.duration, course.durationUnit);
        const key = this.getPricingKey(course.pricing ?? PricingLevel.Medium, durationInHours);
console.log(key);
        console.log(course);
        const pricing = this.pricingTable[key];

        if (!pricing) {
            console.warn(`No pricing found for ${key}.`);
            return null;
        }

        return pricing;
    }

    /**
     * Get price per participant for a course
     * Returns null if pricing not available
     */
    static getPricePerParticipant(course: Course): number | null {
        const pricing = this.getPricing(course);
        return pricing ? pricing.pricePerParticipant : null;
    }

    /**
     * Get inhouse price for a course
     * Returns null if pricing not available
     */
    static getPriceInhouse(course: Course): number | null {
        const pricing = this.getPricing(course);
        return pricing ? pricing.priceInhouse : null;
    }
}
