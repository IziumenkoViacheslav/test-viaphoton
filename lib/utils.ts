import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function maxKgNutsCanTranspoted(D: number, N: number, F: number, C: number): number {

  let nutsInKg = N;
  const distanseInKm = D;
  const fuelKgPerKm = F;
  const cartCapacityInKg = C;
  let result = 0;
  const fuelForOneTripInKg = distanseInKm * fuelKgPerKm;

  const fuelForOneRoundTripInKg = fuelForOneTripInKg * 2;

  while (nutsInKg > 0) {

    if (nutsInKg > cartCapacityInKg) {
      result += cartCapacityInKg;
      nutsInKg -= cartCapacityInKg;
    } else { // last trip
      result += nutsInKg;
    }
    nutsInKg -= fuelForOneRoundTripInKg;
  }

  return result;

}