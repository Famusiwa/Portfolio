import { useEffect } from "react";
import assets from "../assets/assets"
interface  toggleTheme {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    
}


const ThemeToggler:React.FC<toggleTheme> = ({theme, setTheme}) => { 
const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

    useEffect(() => {
        const useDarkmode = window.matchMedia('prefers-color-scheme: dark').matches;
        setTheme(theme || (useDarkmode ? 'dark' : 'light'));
    });

    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

  return (
    <>
      <button>
        {
            theme === 'dark' 
            ? (<img src={assets.sun_icon} alt=""
                className="size-8.5 rounded-full border-gray-500 border p-1.5 " 
                onClick={toggleTheme}
                />) 

            : (<img src={assets.moon_icon} alt=""
                className="size-8.5 rounded-full border border-gray-500 p-1.5"
                onClick={toggleTheme}/>)
        }
      </button>  
    </>
  )
}

export default ThemeToggler
