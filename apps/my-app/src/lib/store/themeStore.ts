import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useThemeStore = create(
	persist(
		() => ({
			theme: 'dark',
		}),
		{
			name: 'theme', // name of the item in the storage (must be unique)
			storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
		}
	)
)
