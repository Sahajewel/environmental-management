import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'

export default function DarkLightMood() {
    // let [theme, setTheme] = useState("light");
const {toggleTheme, theme} = useContext(AuthContext)
    // const toogleTheme= ()=>{
    //      theme = theme === "light" ? "dark" : "light";
    //     setTheme(theme)
    //     localStorage.setItem("theme", theme)
    // }

    // useEffect(()=>{
    //     if(theme === "dark"){
    //         document.documentElement.classList.add("dark");
    //     }
    //     else{
    //         document.documentElement.classList.remove("dark")
    //     }
    // },[theme])

    // useEffect(()=>{
    //     const savedTheme = localStorage.getItem("theme");
    //     const systemPrefersDark = window.matchMedia(("prefers-color-scheme: dark")).matches;
    //     if(savedTheme){
    //         setTheme(savedTheme)
    //     }
    //     else if(systemPrefersDark){
    //         setTheme("dark")
    //     }
    // },[theme])

   

   
    return (
        <div>
            <button onClick={toggleTheme}>{theme === "light" ? <span>🌙</span > : <span>☀️</span>}</button>
        </div>
    )
}
