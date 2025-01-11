import { defineStore } from 'pinia'
import mockData from '../Data/data.json'

export const useGuideStore = defineStore('guides', {
    state: () => ({
        mounts: [],
        pets: [],
        toys: [],
        transmogs: [],
        error: null
    }),

    actions: {
        fetchMounts() {
            this.mounts = mockData.mounts
        },

        fetchPets() {
            this.pets = mockData.pets
        },

        fetchToys() {
            this.toys = mockData.toys
        },

        fetchTransmogs() {
            this.transmogs = mockData.transmogs
        }
    },

    getters: {
        getMountById: (state) => (id) => {
            return state.mounts.find(mount => mount.id === id)
        },
        getPetById: (state) => (id) => {
            return state.pets.find(pet => pet.id === id)
        },
        getToyById: (state) => (id) => {
            return state.toys.find(toy => toy.id === id)
        },
        getTransmogById: (state) => (id) => {
            return state.transmogs.find(transmog => transmog.id === id)
        }
    }
})