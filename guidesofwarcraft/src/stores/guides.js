import { defineStore } from 'pinia'
import Data from '../Data/data.json'

const generateSlug = (text) => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
}

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
            this.mounts = Data.mounts.map(mount => ({
                ...mount,
                slug: mount.slug || generateSlug(mount.name)
            }))
        },
        fetchPets() {
            this.pets = Data.pets.map(pet => ({
                ...pet,
                slug: pet.slug || generateSlug(pet.name)
            }))
        },
        fetchToys() {
            this.toys = Data.toys.map(toy => ({
                ...toy,
                slug: toy.slug || generateSlug(toy.name)
            }))
        },
        fetchTransmogs() {
            this.transmogs = Data.transmogs.map(transmog => ({
                ...transmog,
                slug: transmog.slug || generateSlug(transmog.name)
            }))
        }
    },

    getters: {
        getMountBySlug: (state) => (slug) => {
            return state.mounts.find(mount => mount.slug === slug)
        },
        getPetBySlug: (state) => (slug) => {
            return state.pets.find(pet => pet.slug === slug)
        },
        getToyBySlug: (state) => (slug) => {
            return state.toys.find(toy => toy.slug === slug)
        },
        getTransmogBySlug: (state) => (slug) => {
            return state.transmogs.find(transmog => transmog.slug === slug)
        }
    }
})