import ArticleItem from './ArticleItem';
import styles from '../styles/Article.module.css';

const ArticleList = ({ articles }) => {
    return (
        <div className={styles.grid}>
            {articles.map(article => (
                <ArticleItem article={article}/>
            ))}
        </div>
    )
};

export default ArticleList;
