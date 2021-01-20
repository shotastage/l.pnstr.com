
export interface GeoCoordinate3D {
    latitude: number | null;
    longitude: number | null;
    altitude: number | null;
}

export interface GeoCoordinate2D {
    latitude: number | null;
    longitude: number | null;
}

class LocationUtils {

    current: GeoCoordinate2D | GeoCoordinate3D | null;

    private static _instance: LocationUtils;

    private constructor() {
        if ('geolocation' in navigator) {
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

    getCurrentLocation = (): GeoCoordinate2D | GeoCoordinate3D | Error => {
        let current: GeoCoordinate2D | GeoCoordinate3D = {
            latitude: 0.0,
            longitude: 0.0,
            altitude: 0.0,
        };

        navigator.geolocation.getCurrentPosition((position) => {
            current = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                altitude: position.coords.altitude,
            };
        }, (e) => {
            
            return null;
        });
        return current;
    }

    startUpdatingLocation(): void { }

    stopUpdatingLocation(): void { }
}

export default LocationUtils;
