import { Game } from './Game/Game';
import styles from './App.module.css';

export const App = () => {
    return (
        <div className={styles.App}>
            <Game />
        </div>
    );
};
