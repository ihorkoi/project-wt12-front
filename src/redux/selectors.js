export const selectIsLoggedIn = store => store.auth.isLoggedIn;

export const selectIsRefreshing = store => store.auth.isRefreshing;

export const selectUser = store => store.auth.user;



export const selectWaterrate = store => store.waterrate.items;

export const selectIsLoading = store => store.waterrate.isLoading;

export const selectError = store => store.waterrate.error;
