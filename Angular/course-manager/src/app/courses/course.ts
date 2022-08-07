import { identifierName } from "@angular/compiler";

// Classe que representa os cursos
export class Course {
    id: number | undefined;
    name: string | undefined;
    imageUrl: string | undefined;
    price: number | undefined;
    code: string | undefined;
    duration: number | undefined;
    rating: number | undefined;
    releaseDate: string | undefined;
}