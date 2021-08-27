'use strict';

const people = [
    {
        name: 'Mauro',
        job: 'Specialist',
        age: 21,
        startedAt: 2018,
        workingAt: 'Germany',
        likings: { color: 'yellow', programmingLanguage: 'C++' }
    },
    {
        name: 'Leandro',
        job: 'Project Manager',
        age: 41,
        startedAt: 2018,
        likings: { color: 'yellow', programmingLanguage: 'C++' }
    },
    {
        name: 'Mauro',
        job: 'Architech',
        age: 22,
        startedAt: 2011,
        workingAt: 'Japan',
        likings: { color: 'Green', programmingLanguage: 'C#' }
    },
    {
        name: 'Carlos',
        job: 'Pizzero',
        age: 24,
        salary: 600,
        startedAt: 2018,
        workingAt: 'Chile',
        likings: { color: 'Brown', programmingLanguage: 'PizzaJS' }
    },
    {
        name: 'Maria',
        job: 'UX Desiger',
        age: 17,
        startedAt: 2018,
        salary: 800,
        workingAt: 'Perú',
        likings: { color: 'Red', programmingLanguage: 'PhotoshopJS' }
    },
    {
        name: 'Lucas',
        job: 'Salchichas Tester',
        age: 16,
        startedAt: 2018,
        salary: 500,
        workingAt: 'United State',
        likings: { color: 'Black', programmingLanguage: 'PanchitosCorp' }
    },
    {
        name: 'Maria',
        job: 'QA',
        age: 32,
        startedAt: 2015,
        workingAt: 'Brazil',
        likings: { color: 'Green', programmingLanguage: 'Jest' }
    }
];

const { 
    filter, reject,
    groupBy,
    maxBy, minBy,
    uniq, uniqBy,
    compact, map,
    flatten, flattenDeep, flattenDepth,
    orderBy
} = require('lodash');
const {  } = require('lodash/fp');

let res;
// res = filter( people, ( person ) => person.age > 18 );
// res = filter( people, { job: 'QA' } );

// res = reject( people, ( person ) => person.age > 18 );

// res = groupBy( people, 'salary' );
// res = groupBy( people, (p) => p.likings.color );

// res = maxBy( people, 'age' );
// res = minBy( people, 'age' );

// res = uniq( [1,2,3,4,1,2,3,4] );
// res = uniqBy( people, 'name' );

// res = map( people, 'workingAt' );
// res = compact(map( people, 'workingAt' ));

// res = flatten([1,2,3,[3322,12,13],8,[99,110,111]]);
// res = flattenDeep([1,2,3,[11,12,13,[1114,1115,1116]],8,[111,112,113, [1117,1118,1119]]]);
// res = flattenDepth([1,2,3,[11,12,13,[1114,1115,1116, [11114,11115]]],8,[111,112,113, [1117,1118,1119, [11117,11118]]]], 2);

// res = orderBy( people, 'age' );
res = orderBy( people, ['name', 'age'], ['asc', 'desc'] );


console.log( res );