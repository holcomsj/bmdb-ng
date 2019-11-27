import { Actor } from './actor.class';
import { Movie } from './movie.class';

export class Credit {
    id: number;
    actor: Actor;
    movie: Movie;
    role: string;

    constructor(id: number = null, actor: Actor = null, movie: Movie = null, role: string = ''){
        this.id = id;
        this.actor = actor;
        this.movie = movie;
        this.role = role;
    }

    // actorName(): string {
    //     return this.actor.lastName + ", " + this.actor.firstName;
    // }
}
