import homeImg from "../assets/image//home-my-photo.png";
import LinkCard from "./linkCard/LinkCard";
import { useState } from "react";
import styles from "./HomeContent.module.scss";
const HomeContent = () => {
  const [openLink, setOpenLink] = useState(false);
  return (
    <>
      <div className={styles.hс}>
        <div className={styles.hc__containerContent}>
          <h1 className={styles.containerContent__title}>
            Добро пожаловать<span> и давайте знакомиться!</span> 
          </h1>
          <img
            src={homeImg}
            alt="photo"
            className={styles.containerContent__imgMobile}
          />
          <h2 className={styles.containerContent__subtitle}>
            Меня зовут Анастасия Патутина, я frontend-разработчик и кандидат в
            Яндекс Практикум!
          </h2>

          <button
            onClick={() => setOpenLink(true)}
            className={styles.containerContent__button}
          >
            Ссылка на репозиторий приложения
          </button>
        </div>
        <img src={homeImg} alt="man" className={styles.hc__img} />
      </div>
      {openLink && <LinkCard onClose={() => setOpenLink(false)} />}
    </>
  );
};

export default HomeContent;
