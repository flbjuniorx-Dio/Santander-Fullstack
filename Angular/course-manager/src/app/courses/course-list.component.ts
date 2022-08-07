import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: '/course-list.component.html' // Segregação de responsabilidades
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: "",
                price: 99.99,
                code: 'FORMS-101',
                duration: 120,
                rating: 5.4,
                releaseDate: '12/02/2019',
            },
            {
                id: 2,
                name: 'Angular: HTTP 101',
                imageUrl: "",
                price: 45.99,
                code: 'HTTP-101',
                duration: 80,
                rating: 4,
                releaseDate: '12/02/2019',
            },
            {
                id: 3,
                name: 'Angular: Security 101',
                imageUrl: "",
                price: 119.99,
                code: 'SEK-101',
                duration: 240,
                rating: 5,
                releaseDate: '12/09/2019',
            }
        ]
    }

}