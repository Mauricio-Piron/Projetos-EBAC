/* eslint-disable jsx-a11y/alt-text */
import styles from "./Post.module.css";

import PostComments from "../PostComments";
import { ReactNode } from "react";

// Define os tipos para as props do componente
type Props = {
  children: ReactNode; // Conteúdo textual do post
  imageUrl: string; // URL da imagem do post
};

const Post = ({ children, imageUrl }: Props) => (
  <div className={styles.post}>
    {/* Imagem do post.*/}
    <img className={styles["post-image"]} src={imageUrl} />
    {/* Conteúdo textual do post */}
    <p className={styles["post-text"]}> {children} </p>
    {/* Comentários relacionados ao post */}
    <PostComments />
  </div>
);

export default Post;
