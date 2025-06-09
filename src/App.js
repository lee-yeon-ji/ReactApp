import Button from "./Button";

// css를 연결하고 싶을 때 import 기능역할 from "./적용할 .css"
import styles from "./App.module.css";
import {useEffect, useState} from "react";

function App() {
  return (
    <div>
        {/*css 를 해당 코드에 적용시킬 때 className={기능역할.기능클래스 이름}*/}
      <h1 className={styles.title}>Welcome back!!!!</h1>
        <Button text={"Continue"}/>


    </div>
  );



}

export default App;

