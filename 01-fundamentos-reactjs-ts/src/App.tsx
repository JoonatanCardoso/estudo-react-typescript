import styles from './App.module.css'
import { Header } from "./components/Header"
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'
import "./global.css"

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/JoonatanCardoso.png',
      name: 'Jonatan Cardoso',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'},
      // { type: 'link', content: '#novoprojeto'},
      // { type: 'link', content: '#nlw'},
      // { type: 'link', content: '#rocketseat'},
    ],
    publishedAt: new Date('2023-11-02 15:36:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/JoonatanC.png',
      name: 'Gabriela Gonçalves',
      role: 'Médica'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'},
      // { type: 'link', content: '#novoprojeto'},
      // { type: 'link', content: '#nlw'},
      // { type: 'link', content: '#rocketseat'},
    ],
    publishedAt: new Date('2022-11-02 10:34:00')
  },
]

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
