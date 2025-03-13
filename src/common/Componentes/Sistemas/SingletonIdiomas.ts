// Definimos los tipos de idioma
type Language = 'es' | 'en';

// Singleton Observer para manejar el idioma
class SingletonIdiomas {
    private static instance: SingletonIdiomas;
    private currentLanguage: Language = 'es'; // Idioma por defecto
    private observers: Array<(language: Language) => void> = []; // Lista de observadores

    // Constructor privado para evitar instanciación externa
    private constructor() {}

    // Método estático para obtener la instancia única
    public static getInstance(): SingletonIdiomas {
        if (!SingletonIdiomas.instance) {
            SingletonIdiomas.instance = new SingletonIdiomas();
        }
        return SingletonIdiomas.instance;
    }

    // Método para obtener el idioma actual
    public getCurrentLanguage(): Language {
        return this.currentLanguage;
    }

    // Método para cambiar el idioma
    public toggleLanguage(): void {
        this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es'; // Alterna entre 'es' y 'en'
        this.notifyObservers(); // Notifica a los observadores
    }

    // Método para suscribir observadores
    public subscribe(observer: (language: Language) => void): void {
        this.observers.push(observer);
    }

    // Método para desuscribir observadores
    public unsubscribe(observer: (language: Language) => void): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Método para notificar a los observadores
    private notifyObservers(): void {
        this.observers.forEach(observer => observer(this.currentLanguage));
    }
}

// Exportamos la instancia del singleton para usarla en otros archivos
export const languageManager = SingletonIdiomas.getInstance();