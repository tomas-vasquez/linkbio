import './App.css'
import MyButton from './components/MyButton'
import Avatar from './components/Avatar'
import userConfig from './config'

function App() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="container">
          <Avatar />

          <div className="col-12 mb-4">
            {userConfig.links.map((item, index) => {
              if (item.type === 'button') {
                return <MyButton key={index} text={item.text} url={item.url} />
              } else if (item.type === 'separator') {
                return (
                  <p class="my-4 text-center" key={index}>
                    {item.text}
                  </p>
                )
              }
              return null
            })}
            <footer className="mt-5 text-center">
              <small> TomyCell® {new Date().getFullYear()}</small>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
