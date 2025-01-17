import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        favorites: JSON.parse(localStorage.getItem('favorites')) || {
            mounts: [],
            pets: [],
            toys: [],
            transmogs: []
        }
    }),

    actions: {
        addFavorite(category, item) {
            if (!this.favorites[category].find(f => f.id === item.id)) {
                this.favorites[category].push(item)
                this.saveFavorites()
            }
        },

        removeFavorite(category, itemId) {
            this.favorites[category] = this.favorites[category].filter(f => f.id !== itemId)
            this.saveFavorites()
        },

        saveFavorites() {
            localStorage.setItem('favorites', JSON.stringify(this.favorites))
        }
    },

    getters: {
        totalFavorites() {
            return Object.values(this.favorites).reduce(
                (total, items) => total + items.length,
                0
            )
        },

        isFavorite: (state) => (category, itemId) => {
            return state.favorites[category].some(f => f.id === itemId)
        },

        getFavoritesByCategory: (state) => (category) => {
            return state.favorites[category]
        }
    }
})