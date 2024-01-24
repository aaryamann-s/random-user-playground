import {useState, useEffect} from 'react';
import { StatefulPerson, Person } from '../types/Person';
import { getUser } from './api';

export default function usePerson(){
    const [persons, setPersons] = useState<StatefulPerson[]>([]);

    const fetchPerson = () => {
        const personKey = Math.floor(Math.random() * 1000000);
        setPersons([...persons, {
            fetching: true,
            key: personKey
        }]);
        getUser().then((res:Person)=>{
            setPersons(prevPersons => prevPersons.map(person => {
                if(person.key !== personKey) return person;
                return {
                    data: res,
                    fetching: false,
                    key: personKey
                }
            }));
        })
    };

    return {
        persons,
        fetchPerson
    };
}