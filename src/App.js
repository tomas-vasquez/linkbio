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
                  <p className="my-4 text-center" key={index}>
                    {item.text}
                  </p>
                )
              }
              return null
            })}

            <h2 className="mt-5">Accesos rápidos a apps y configuraciones</h2>

            <a
              href="intent://#Intent;package=com.android.chrome;end"
              className="button d-block my-2"
            >
              Abrir Google Chrome
            </a>
            <a
              href="intent://#Intent;action=android.settings.SETTINGS;end"
              className="button d-block my-2"
            >
              Abrir Configuración General
            </a>
            <a
              href="intent://#Intent;action=android.settings.WIFI_SETTINGS;end"
              className="button d-block my-2"
            >
              Abrir Configuración de Wi-Fi
            </a>
            <a
              href="intent://#Intent;action=android.settings.BLUETOOTH_SETTINGS;end"
              className="button d-block my-2"
            >
              Abrir Bluetooth
            </a>
            <a
              href="intent://#Intent;action=android.settings.DISPLAY_SETTINGS;end"
              className="button d-block my-2"
            >
              Abrir Configuración de Pantalla
            </a>
            <a
              href="intent://#Intent;action=android.intent.action.MAIN;category=android.intent.category.HOME;end"
              className="button d-block my-2"
            >
              Ir al Inicio (Home)
            </a>

            <footer className="mt-5 text-center">
              <small>TomyCell® {new Date().getFullYear()}</small>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default App