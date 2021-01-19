
export interface GeoCoordinates {
    latitude: number;
    longitude: number;
    altitude: number;
}

class LocationUtils {

    current: GeoCoordinates;

    private static _instance: LocationUtils;

    private constructor() {
        if (!navigator.geolocation) {
            throw new Error("Failed to initialize geolocation service. This problem might be in unsupported browser.")
        }

        // Default location is Yokohama Minatomirai.
        this.current = {
            latitude: 35.459959,
            longitude: 139.627759,
            altitude: 0.0,
        }
    }

    public static get instance(): LocationUtils {
        if (!this._instance) {
            this._instance = new LocationUtils();
        }

        return this._instance;
    }

    getCurrentLocation(): number {
        let current = 0.0 // navigator.geolocation.getCurrentPosition();
        return current;
    }

    startUpdatingLocation(): void { }

    stopUpdatingLocation(): void { }
}

export default LocationUtils;
