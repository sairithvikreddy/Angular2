import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService{
    apikey: string;
    
    constructor(private _jsonp:Jsonp){
        this.apikey = '2e11fc19c241b8902776388ff3acd376';
        console.log('MovieService Initialized...');
    }
    
    getPopular(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey)
            .map(res => res.json());
    }
    
    getInTheaters(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-12-15&primary_release_date.lte=2018-01-10&api_key='+this.apikey)
            .map(res => res.json());
    }
}