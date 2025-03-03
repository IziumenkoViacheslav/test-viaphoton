import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function maxKgNutsCanTranspoted(D: number, N: number, F: number, C: number): number {
  console.log('maxKgNutsCanTranspoted started');

  console.log({ D, N, F, C });
  let nutsInKg = N;
  const distanseInKm = D;
  const fuelKgPerKm = F;
  const cartCapacityInKg = C;
  let result = 0;
  const fuelForOneTripInKg = distanseInKm * fuelKgPerKm;
  console.log({ fuelForOneTripInKg });

  const fuelForOneRoundTripInKg = fuelForOneTripInKg * 2;
  console.log({ fuelForOneRoundTripInKg });

  const enouphFuelForOneTrip = nutsInKg >= fuelForOneTripInKg;
  console.log({ enouphFuelForOneTrip });

  while (nutsInKg > 0) {
    nutsInKg -= fuelForOneRoundTripInKg;
    console.log({ nutsInKg });

    console.log({ cartCapacityInKg });

    if (nutsInKg > cartCapacityInKg) {
      result += cartCapacityInKg;
      nutsInKg -= cartCapacityInKg;
    } else { // last trip
      result += nutsInKg;
    }
  }
  console.log({ result });

  return result;

}