import { createContext } from "react";

const AuthContext  = createContext(null)
const SelectContext  = createContext(null)
const VideoHistoryContext  = createContext([])
const SelectedCategoryContext = createContext("")
const SearchContext = createContext("")

export {AuthContext,SelectContext ,SelectedCategoryContext, VideoHistoryContext,SearchContext}



