type searchProps = {
    loadUser: (userName: string) =>Promise<void>;
};
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './Search.module.css'

const Search = ({loadUser}:searchProps) => {
    const [userName, setUserName] = useState('');
    return ( 
        <div className={styles.search}>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus Repositórios</p>
            <div className={styles.search_contain}>
                <input 
                type="text" 
                placeholder="Digite o Nome do Usuário" 
                onChange={(e)=>setUserName(e.target.value)}
                />

                <button 
                onClick={()=>loadUser(userName)}>
                    <BsSearch/>
                </button>
            </div>
        </div>
     );
}
 
export default Search;