// @ts-ignore
import {RAILS_API_ENDPOINT} from '@env'

export const isLoggedIn = () => {
    return fetch(`${RAILS_API_ENDPOINT}/logged_in`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET'
        }).then((data) => data.json()).then((res) =>{
            return res
        })
}

export const logIn = (credentials: any) => {
    return fetch(`${RAILS_API_ENDPOINT}/login`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(credentials)
        }).then((data) => data.json()).then((res) =>{
          if (res.logged_in === true) {
            return res
          } else {
            return res.errors
          }
        })
        .catch((err) => {
          console.log(err)
          console.log('error logging in up: ', err)
        })
}

export const signUp = (credentials: any) => {
    return fetch(`${RAILS_API_ENDPOINT}/signup`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(credentials)
        }).then((data) => data.json()).then((res) =>{
          if (res.logged_in === true) {
            return res
          } else {
            return res.errors
          }
        })
        .catch((err) => {
          console.log(err)
          console.log('error logging in up: ', err)
        })
}

export const logOut = () => {
    return fetch(`${RAILS_API_ENDPOINT}/logout`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        }).then((data) => data.json()).then((res) =>{
          if (res.logged_out) {
            return true
          } else {
              return 'log out failed'
          }
        })
        .catch((err) => {
          console.log(err)
          console.log('error logout failed: ', err)
        })
}

export const getDogs = (userId: number) => {
    return fetch(`${RAILS_API_ENDPOINT}/users/${userId}/dogs`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET'
        }).then((data) => data.json()).then((res) =>{
            return res
        })
        .catch((err) => {
          console.log('error checking dogs: ', err)
        })
}

export const createDog = (dog: any) => {
    return fetch(`${RAILS_API_ENDPOINT}/dogs/create`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(dog)
        }).then((data) => data.json()).then((res) =>{
            if (res.dog) {
                console.log(`${res.dog.name} was successfully added to your profile `, res.dog)
              } else {
                console.log("dog submission failed ", res.errors)
            }
            return res
        })
        .catch((err) => {
          console.log(err)
          console.log('error logging in up: ', err)
        })
}

export const getParks = () => {
    return fetch(`${RAILS_API_ENDPOINT}/parks`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET'
        }).then((data) => data.json()).then((res) =>{
            return res
        })
        .catch((err) => {
          console.log('error checking parks: ', err)
    })
}

export const createPark = (park: any) => {
    return fetch(`${RAILS_API_ENDPOINT}/parks/create`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(park)
        }).then((data) => data.json()).then((res) =>{
          if (res.park) {
              console.log(res.park)
            console.log(`${res.park.name} was successfully added to your profile `)
            return res
          } else {
            console.log("park creation failed ", res.errors)
          }
          return res
        })
        .catch((err) => {
          console.log(err)
          console.log('error adding park: ', err)
        })
}

export const getFriends = (userId: string) => {
    return fetch(`${RAILS_API_ENDPOINT}/friends/${userId}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET'
        }).then((data) => data.json()).then((res) =>{
            return res
        })
        .catch((err) => {
          console.log('error checking friends: ', err)
    })
}

export const createVisit = (visit: any) => {
    return fetch(`${RAILS_API_ENDPOINT}/park_visits`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(visit)
        }).then((data) => data.json()).then((res) =>{
          return res
        })
        .catch((err) => {
          console.log(err)
          console.log('error adding visit: ', err)
        })
}

export const getVisit = (visitId: string) => {
    return fetch(`${RAILS_API_ENDPOINT}/park_visits/${visitId}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET'
        }).then((data) => data.json()).then((res) =>{
            console.log(res)
            return res
        })
        .catch((err) => {
          console.log('error checking visit: ', err)
    })
}

export const getVisits = () => {
    return fetch(`${RAILS_API_ENDPOINT}/park_visits/`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET'
        }).then((data) => data.json()).then((res) =>{
            console.log(res)
            return res
        })
        .catch((err) => {
          console.log('error checking visit: ', err)
    })
}