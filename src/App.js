/*
  author:Makinde Timilehin
  github: https://www.github.com/Timilehinn
*/ 
import './App.css';
import styles from './styles/Home.module.css'
import Navbar from './components/navbar'
import Main from './components/Main'
export default function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Main /> 
    </div>
  )
}

