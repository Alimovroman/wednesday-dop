import {RootStateOrAny, RootStoreType} from "store";


export const selectUsersCount = (state: RootStoreType): string => state.userCount.count;
